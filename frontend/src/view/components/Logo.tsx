import { ComponentProps } from "react"

interface LogoProps extends ComponentProps<"svg"> { }

export function Logo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 106 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.2798 7.58594H10.2285C8.03939 7.58594 6.6665 9.13611 6.6665 11.3306V17.2513C6.6665 19.4458 8.03182 20.9959 10.2285 20.9959H19.2787C21.4764 20.9959 22.8428 19.4458 22.8428 17.2513V11.3306C22.8428 9.13611 21.4764 7.58594 19.2798 7.58594Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2144 12.0488H19.2895"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.9275 7.58365L17.3417 4.94056C16.2055 3.06933 14.2402 2.43801 12.3539 3.57524L4.60512 8.23874C2.72631 9.36733 2.34796 11.4029 3.47654 13.2893L6.53797 18.3549C6.68067 18.6003 6.8385 18.8208 7.01903 19.0186V19.0262"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34.8043 8.95513H39.9968V18.5H38.3359V10.5587H34.8043V18.5H33.1435V10.5587H31.6164V8.95513H33.1435V8.66878C33.1435 6.14893 34.5371 4.88901 37.3242 4.88901C37.8842 4.88901 38.5396 4.97173 39.2904 5.13718V6.64527C38.4505 6.54345 37.7951 6.49255 37.3242 6.49255C36.4461 6.49255 35.8034 6.65799 35.3961 6.98888C35.0016 7.31977 34.8043 7.87974 34.8043 8.66878V8.95513ZM47.2943 8.70696C48.4142 8.70696 49.3114 9.0633 49.9859 9.77598C50.6604 10.4759 50.9977 11.4304 50.9977 12.6394V18.5H49.3369V12.7349C49.3369 11.9713 49.1269 11.3732 48.7069 10.9405C48.2869 10.5078 47.7079 10.2914 46.9697 10.2914C46.1171 10.2914 45.4426 10.5587 44.9462 11.0932C44.4499 11.615 44.2017 12.3976 44.2017 13.4412V18.5H42.5409V8.95513H44.2017V10.3296C44.8635 9.24783 45.8943 8.70696 47.2943 8.70696ZM57.8023 18.7482C56.3642 18.7482 55.1679 18.2709 54.2134 17.3164C53.2589 16.3492 52.7817 15.1529 52.7817 13.7276C52.7817 12.3022 53.2589 11.1123 54.2134 10.1578C55.1679 9.19057 56.3642 8.70696 57.8023 8.70696C58.744 8.70696 59.5903 8.93604 60.3412 9.39419C61.0921 9.83962 61.652 10.4441 62.0211 11.2077L60.6276 12.0095C60.3858 11.5004 60.0103 11.0932 59.5013 10.7877C59.0049 10.4823 58.4386 10.3296 57.8023 10.3296C56.8478 10.3296 56.046 10.6541 55.397 11.3032C54.7606 11.9649 54.4425 12.7731 54.4425 13.7276C54.4425 14.6693 54.7606 15.4711 55.397 16.1329C56.046 16.7819 56.8478 17.1064 57.8023 17.1064C58.4386 17.1064 59.0113 16.9601 59.5204 16.6674C60.0294 16.3619 60.4176 15.9547 60.6848 15.4456L62.0975 16.2665C61.6775 17.0301 61.0857 17.6346 60.3221 18.08C59.5585 18.5255 58.7186 18.7482 57.8023 18.7482ZM68.4906 8.70696C69.6105 8.70696 70.5077 9.0633 71.1822 9.77598C71.8568 10.4759 72.194 11.4304 72.194 12.6394V18.5H70.5332V12.7349C70.5332 11.9713 70.3232 11.3732 69.9032 10.9405C69.4833 10.5078 68.9042 10.2914 68.1661 10.2914C67.3134 10.2914 66.6389 10.5587 66.1426 11.0932C65.6462 11.615 65.3981 12.3976 65.3981 13.4412V18.5H63.7372V5.13718H65.3981V10.3296C66.0598 9.24783 67.0907 8.70696 68.4906 8.70696ZM83.6756 14.4912H75.677C75.8424 15.3311 76.2306 15.9929 76.8415 16.4765C77.4523 16.9474 78.2159 17.1828 79.1322 17.1828C80.3922 17.1828 81.3085 16.7183 81.8812 15.7893L83.2938 16.591C82.352 18.0291 80.9521 18.7482 79.0941 18.7482C77.5923 18.7482 76.3579 18.2773 75.3906 17.3355C74.4489 16.3683 73.978 15.1657 73.978 13.7276C73.978 12.2767 74.4425 11.0805 75.3716 10.1387C76.3006 9.1842 77.5032 8.70696 78.9795 8.70696C80.3794 8.70696 81.5185 9.20329 82.3966 10.196C83.2874 11.1632 83.7329 12.3467 83.7329 13.7467C83.7329 13.9885 83.7138 14.2366 83.6756 14.4912ZM78.9795 10.2723C78.1014 10.2723 77.3632 10.5205 76.7651 11.0168C76.1797 11.5132 75.817 12.1877 75.677 13.0403H82.053C81.913 12.1622 81.563 11.4813 81.003 10.9977C80.4431 10.5141 79.7686 10.2723 78.9795 10.2723ZM90.1094 18.7482C88.6713 18.7482 87.475 18.2709 86.5206 17.3164C85.5661 16.3492 85.0888 15.1529 85.0888 13.7276C85.0888 12.3022 85.5661 11.1123 86.5206 10.1578C87.475 9.19057 88.6713 8.70696 90.1094 8.70696C91.0512 8.70696 91.8975 8.93604 92.6484 9.39419C93.3992 9.83962 93.9592 10.4441 94.3283 11.2077L92.9347 12.0095C92.6929 11.5004 92.3175 11.0932 91.8084 10.7877C91.3121 10.4823 90.7458 10.3296 90.1094 10.3296C89.1549 10.3296 88.3532 10.6541 87.7041 11.3032C87.0678 11.9649 86.7496 12.7731 86.7496 13.7276C86.7496 14.6693 87.0678 15.4711 87.7041 16.1329C88.3532 16.7819 89.1549 17.1064 90.1094 17.1064C90.7458 17.1064 91.3185 16.9601 91.8275 16.6674C92.3366 16.3619 92.7247 15.9547 92.992 15.4456L94.4046 16.2665C93.9847 17.0301 93.3929 17.6346 92.6293 18.08C91.8657 18.5255 91.0257 18.7482 90.1094 18.7482ZM99.4042 13.5748L104.119 18.5H102.058L97.7052 13.9757V18.5H96.0444V5.13718H97.7052V13.174L101.829 8.95513H103.967L99.4042 13.5748Z"
        fill="currentColor"
      />
    </svg>

  )
}
