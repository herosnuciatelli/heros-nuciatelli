import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="44" height="67" viewBox="0 0 44 67" fill="none">
      <path d="M22.1925 33.4548H5C3.89543 33.4548 3 32.5593 3 31.4548V7.50543C3 5.4563 5.71512 4.73279 6.7348 6.51019L22.1925 33.4548ZM22.1925 33.4548L37.6501 60.3993C38.6698 62.1767 41.3849 61.4532 41.3849 59.4041V35.4548C41.3849 34.3502 40.4895 33.4548 39.3849 33.4548H22.1925Z" stroke="black" strokeWidth="5"/>
    </svg>
  ),
  bgSquare: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="467" height="167" viewBox="0 0 467 167" fill="none" {...props}>
      <path d="M465 0V165H-18" stroke="url(#paint0_linear_6_740)" strokeWidth="3"/>
        <defs>
          <linearGradient id="paint0_linear_6_740" x1="109.378" y1="147.828" x2="323.64" y2="-87.2789" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0066FF"/>
            <stop offset="0.512617" stopColor="#C112ED"/>
            <stop offset="1" stopColor="#EE1E1E"/>
          </linearGradient>
        </defs>
    </svg>
  ),
  bgTriangle: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="358" height="592" viewBox="0 0 358 592" fill="none" {...props}>
      <path d="M3 368.014L356 589V296.5V4L3 368.014Z" stroke="url(#paint0_linear_6_745)" strokeWidth="3"/>
      <defs>
        <linearGradient id="paint0_linear_6_745" x1="356.759" y1="3.99993" x2="106.723" y2="489.63" gradientUnits="userSpaceOnUse">
          <stop stopColor="#56AEEE"/>
          <stop offset="0.5" stopColor="#EAB690"/>
          <stop offset="1" stopColor="#F27272"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  bgCircle: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="323" height="498" viewBox="0 0 323 498" fill="none" {...props}>
      <circle cx="268" cy="230" r="266.5" stroke="url(#paint0_linear_6_741)" strokeWidth="3"/>
      <defs>
        <linearGradient id="paint0_linear_6_741" x1="7.50001" y1="269" x2="268" y2="498" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93A3DC"/>
          <stop offset="0.54" stopColor="#F75454"/>
          <stop offset="1" stopColor="#F45B5B"/>
        </linearGradient>
      </defs>
    </svg>
  )
}