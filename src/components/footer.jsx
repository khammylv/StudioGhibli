import '../assets/css/footer.css'

const Footer = ()=>{
   return(
    <footer>
        <div className="contenedor footer_content">
            <div className="contact_us">
                <h2 className="brand">Studio Ghibli</h2>
                <p>Your best studio</p>
            </div>
            <div className="social_media">
                
               <a href="https://www.linkedin.com/in/maria-camila-leal-vasquez-614365204/" target="_blank" className="social_media_icon" rel="noreferrer">
                  <i className="bx bxl-linkedin-square"></i>
               </a>
               <a href="https://github.com/khammylv" target="_blank" className="social_media_icon" rel="noreferrer">
                  <i className="bx bxl-github"></i>
               </a>
               <a href="mailto:khammylv@gmail.com" className="social_media_icon">
                  <i className="bx bxl-gmail"></i>
               </a>
            </div>
        </div>
        <div className="line"></div>
    </footer>
   )
}

export default Footer