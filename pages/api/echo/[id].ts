import { NextApiRequest, NextApiResponse } from 'next'

interface IdNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}

const getById = (req: IdNextApiRequest, res: NextApiResponse) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(req.query.id)

  // аналогичная запись (см. выше)
  res.json({ yourId: req.query.id })
}

export default getById
