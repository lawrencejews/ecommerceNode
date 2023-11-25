import Logo from "@/assets/Logo.png";


type Props = {}

const Footer = ({}: Props) => {
  return (
    <footer
      className="bg-primary-100 py-16"
    >
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Ut sed eleifend nulla. Integer laoreet dapibus pulvinar.
            Fusce rutrum orci sit amet felis pharetra suscipit.
            Quisque auctor lobortis sapien, sit amet viverra dolor commodo sed.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> nterdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <p className="my-5"> interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <p> Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold"> Contact Us</h4>
          <p className="my-5"> Praesent varius tellus ex, eget lacinia leo iaculis et. </p>
          <p> (010)463-3278 </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer