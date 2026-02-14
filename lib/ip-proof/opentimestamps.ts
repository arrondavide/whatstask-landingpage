// OpenTimestamps integration for Bitcoin blockchain timestamping
// Uses the free OpenTimestamps calendar servers

export async function createTimestamp(hash: string): Promise<string | null> {
  try {
    // Convert hex hash to Uint8Array
    const hashBytes = new Uint8Array(
      hash.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || []
    )

    // Submit to OpenTimestamps calendar servers
    const calendars = [
      'https://a.pool.opentimestamps.org',
      'https://b.pool.opentimestamps.org',
      'https://a.pool.eternitywall.com'
    ]

    for (const calendar of calendars) {
      try {
        const response = await fetch(`${calendar}/digest`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: hashBytes,
        })

        if (response.ok) {
          const otsData = await response.arrayBuffer()
          // Convert to base64 for storage
          return Buffer.from(otsData).toString('base64')
        }
      } catch (calendarError) {
        console.error(`Calendar ${calendar} failed:`, calendarError)
        continue
      }
    }

    return null
  } catch (error) {
    console.error('Failed to create timestamp:', error)
    return null
  }
}

export async function verifyTimestamp(otsData: string, hash: string): Promise<{
  verified: boolean
  bitcoinTxId?: string
  bitcoinBlockHeight?: number
}> {
  try {
    // Decode base64 OTS data
    const otsBytes = Buffer.from(otsData, 'base64')

    // For now, return pending status
    // Full verification requires parsing the OTS format and checking Bitcoin
    // This would typically be done with the opentimestamps library on the server

    return {
      verified: false,
    }
  } catch (error) {
    console.error('Failed to verify timestamp:', error)
    return { verified: false }
  }
}

export async function upgradeTimestamp(otsData: string): Promise<{
  upgraded: boolean
  newOtsData?: string
  bitcoinTxId?: string
  bitcoinBlockHeight?: number
}> {
  try {
    const calendars = [
      'https://a.pool.opentimestamps.org',
      'https://b.pool.opentimestamps.org',
    ]

    // Try to upgrade the timestamp by checking calendar servers
    for (const calendar of calendars) {
      try {
        const response = await fetch(`${calendar}/timestamp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/octet-stream',
          },
          body: Buffer.from(otsData, 'base64'),
        })

        if (response.ok) {
          const upgradedData = await response.arrayBuffer()
          const newOtsData = Buffer.from(upgradedData).toString('base64')

          // Check if it contains Bitcoin attestation
          // This is a simplified check - full parsing would be more complex
          if (newOtsData.length > otsData.length) {
            return {
              upgraded: true,
              newOtsData,
            }
          }
        }
      } catch (error) {
        continue
      }
    }

    return { upgraded: false }
  } catch (error) {
    console.error('Failed to upgrade timestamp:', error)
    return { upgraded: false }
  }
}
