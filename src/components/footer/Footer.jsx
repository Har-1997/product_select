import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="inFooter">
                <div className='footerText'>
                    <span className='titleF'>Prepared:</span>
                    <span className='byF'>Harutyun Grigoryan:</span>
                </div>
                <div className='footerText'>
                    <span className='titleF'>Email:</span>
                    <a className='contF' href='mailto:harutgrigoryan44414@gmail.com'>harutgrigoryan44414@gmail.com</a>
                </div>
                <div className='footerText'>
                    <span className='titleF'>Tel:</span>
                    <a className='contF' href='tel:+37494779677'>+37494779677</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
