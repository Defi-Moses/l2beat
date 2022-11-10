import React, { SVGAttributes } from 'react'

import { Icon } from '../Icon'

export function ShieldIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Icon
      aria-label="Shield with an exclamation mark icon"
      viewBox="0 0 16 20"
      width="16"
      height="20"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.08643 20C16.4939 15.5 15.9944 4 15.9944 4C11.4974 4 7.99993 0 7.99993 0C7.99993 0 4.00293 4 0.00543225 4C0.00543225 4 -0.494067 15.5 8.08643 20ZM7.0715 13.698C7.0235 13.8135 7 13.9365 7 14.071C7 14.2055 7.0235 14.3285 7.0715 14.4405C7.118 14.553 7.1855 14.65 7.273 14.7345C7.3585 14.8175 7.464 14.8825 7.585 14.9305C7.707 14.977 7.8435 15 7.997 15C8.15 15 8.288 14.977 8.411 14.931C8.536 14.883 8.6415 14.818 8.727 14.735C8.814 14.6505 8.8815 14.5535 8.9285 14.441C8.9765 14.329 9 14.206 9 14.071C9 13.9365 8.9765 13.8135 8.9285 13.698C8.882 13.584 8.8145 13.485 8.727 13.402C8.6415 13.318 8.536 13.2525 8.411 13.2055C8.288 13.1595 8.15 13.135 7.997 13.135C7.844 13.135 7.707 13.1595 7.585 13.2055C7.464 13.2525 7.3585 13.318 7.273 13.402C7.186 13.485 7.1185 13.584 7.0715 13.698ZM7.2535 12H8.74L8.95 6H7.043L7.2535 12Z"
      />
    </Icon>
  )
}