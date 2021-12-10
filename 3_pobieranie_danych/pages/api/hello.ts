// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { request } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method)

  if (req.method === 'POST') {
    res.send('POST')
  }

  res.status(200).json({ name: 'sdasd' })
}

export default handler
