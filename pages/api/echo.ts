import { NextApiRequest, NextApiResponse } from 'next'

interface MessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string
  }
}

// мы работаем уже на сервере в данном случае
const echo = (req: MessageNextApiRequest, res: NextApiResponse) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(
  //   JSON.stringify({
  //     message: req.query.message || 'Base Message',
  //   }),
  // )

  // аналогичная запись (см. выше)
  res.json({ message: req.query.message || 'Base Message' })
}

export default echo
