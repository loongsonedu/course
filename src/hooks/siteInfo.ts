import { useCallback, useEffect, useState } from 'react'
import { getSiteConfig } from '../api'

export const useSiteInfo = () => {
  const [config, setConfig] = useState<any>({})
  const [loading, setLoading] = useState(true)

  const init = useCallback(async () => {
    const res = await getSiteConfig()
    if(res) {
      setConfig(res)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return { config, loading }
}
