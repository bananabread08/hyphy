import { Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

type AboutAndSupport = {
  title: string
  list: string[]
}

const aboutAndSupportData: AboutAndSupport[] = [
  {
    title: 'HyPhy Studio',
    list: ['About Us', 'Works', 'Blog', 'Contact Us', 'Get 10% Off'],
  },
  {
    title: 'Support',
    list: [
      'User Manual',
      'Console',
      'Firmware',
      'FAQ',
      'Order Tracking',
      'Shipping Policy',
      'Privacy Policy',
      'Return Policy',
      'Warranty',
      'Terms & Conditions',
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {aboutAndSupportData.map((data) => {
        return (
          <div key={data.title}>
            <h2 className="font-bold">{data.title}</h2>
            <ul>
              {data.list.map((item) => (
                <li key={data.title + item}>{item}</li>
              ))}
            </ul>
          </div>
        )
      })}

      <div>
        <h2 className="font-bold">Get in touch</h2>
        <div className="flex items-center gap-2">
          <Mail />
          <span>Email us!</span>
        </div>
      </div>

      <div>
        <h2 className="font-bold">Follow Us</h2>
        <ul className="flex items-center gap-2 flex-wrap">
          <li className="border rounded-full p-1">
            <Facebook />
          </li>
          <li className="border rounded-full p-1">
            <Twitter />
          </li>
          <li className="border rounded-full p-1">
            <Instagram />
          </li>
          <li className="border rounded-full p-1">
            <Youtube />
          </li>
        </ul>
      </div>
    </footer>
  )
}
