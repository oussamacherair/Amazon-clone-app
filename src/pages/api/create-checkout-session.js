const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
export default async (req, res) => {
  const { items, email } = await req.body
  const transformeItems = items.map(item => ({
    price_data: {
      currency: 'gbp',
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description
      },
      unit_amount: item.price * 100
    },
    quantity: 1
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'gbp',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ['KW', 'KY', 'KZ']
    },
    line_items: transformeItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cancel`,
    metadata: {
      email: email,
      images: JSON.stringify(items.map(item => item.image))
    }
  })

  res.status(200).json({ id: session.id })
}
