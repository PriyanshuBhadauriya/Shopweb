import React from 'react';
import Carosel from './Carosel';


import './home.css';
//import  './shoe.jpg';
//import './video.mp4';


const Home = () => {

return (
	<>
	<div className='box'>
		<h5 className='t1'>Sign Up and get 15% Off</h5>
		<h5 className='t2'>Accept UPI & Net Banking</h5>
	</div>
	<div className='Nav'>
		<img className="logo" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXkAAACGCAMAAAAPbgp3AAAAflBMVEX///8AAAD39/f7+/vy8vLs7Ozv7+/Kysq0tLS/v7+np6fS0tJ+fn7X19f19fWDg4Ph4eGdnZ10dHRtbW25ublQUFA9PT3b29sSEhKLi4ssLCxZWVmTk5OsrKxGRkZUVFQgICBjY2M0NDTExMSYmJgWFhZJSUkkJCQ3Nzd3d3elZI5RAAAHF0lEQVR4nO2daaOqIBCGL5ll2Wp72WJ16vT//+AtrU6mKMIMi/p8D8aJXoFZ+vePh5bN9bEaURor1RZUlV1LtQWmY7e5VGNzhjakWrirybTB80GPQJtSIRbdGZks+D67Ih1YYypDy/EIIWeu5X6nS+ag5lSExmm4vrv9wr9qO4S0AQ2qBA3Xv5AHN06ZeeASsoMzqQosxvvQ6+QwHggMMyL1ki/AyJksI7eT2UlopNZ9iFrl2Wh0ej/kRW8kNpj1+ALFvrtqYLX949vr5NC1RAec34dZQ1hWat7CHrEHWKrBY6Ct+DglZrQNlp9uF5aZkF44FMBAJcWeeoeY18m1y3toijEOB6svKVOx2qs1+WIGtAmcRsPV9/JJ+ufdt9fvMgPlKTcabwM0XGkYdYOk18lafDfzwn4OWd+VfZAU9ufyBDxrWq8Z4IY0nGZ0AZbCEGI38+byGhVyUHNx/Xm618l1CyYzId5r4D7osEYy6m4oXoeVmZDxa+Ql8MCmYTsTqtfvggC+7zu9x/ahhzaIZqd3zHD7EVhmHoz+hq+q2DTaVGGPCDBuzq2/q85q7mz64wvd5SErnOPl7G8GD2UCnRltgxyvkzXWFeLwY5JqHaOanVue1+8y42JN73xO08SaRTsa7VW2sKPKzIPF5zxVCQO64xnN1TF3OPC7mTdW7Ja/hzeRNtzPSUuaq2PgyUxILKpFHNS51GM7HsXNCRBlJsSPTwd6E6QZ1mmYeu2YxhF9Cba/ZgSJbGmI9coAYwJZZh40v6Ys5ws26wIsBV9GTO77BR9ImFMutjNhlphw7cl5052/5y1XtUKz07sW8TohE0m3Vv3EzCVKtIllgLHhSztGJucuSSJrP54BxsR8Ks++lAhACTaV9jYrskFDlsyETFMMMDzTxu70KCHrTJa+1DLI7w2l6Z5vtFe/HF6XKzMhqVtcU0tgUzPAmOAt4ePHSbXDxDvi9AwwNs4itTV8tNItMW3Nt6beT/qTMLBTEgWiHKdN0vnBacgn7BGedJkJ6VDMMWZX6Z4LXIAlWZ5V6SrNIiM8v+gWPyfFUCMzIT2aTdrHv7MzwJjwFC6vBdWqrjqj8hkUvgBL8iNUKSwMfe+rbRi24fq8O/YPZop/02nXBk8uai2jsGBLFMjjpvwtlhV41y4a+FHbLsRSrcyE+FkGapXPypQBxsRFh6L21JuyN9oEpaz2qnBkg4Z6mQmh7ihDtOiuYvVhhD3kMNZEQe0cQ5XfHyRq24WAaEgARF6KldKSEXt6K5QokAdIQwIg8pa8usoFi1oCyckSrlIYgvyzt5LMSpBzUgyNZCYkf8mTH9k2FcwAY0InmYkY5hst9e6maAYYE2uYviegDJgsl3R13TxxJQrkAV4pDMI433AiJ7mSXtsuBmxDAjgYN8rIOX5AF2BJDgiVwjBkXFLGwQtRjrgywJjQU2YimEOXSxSpb3U8DGGP0FVmQkb59r9YQ/9sB7wZYGzmaiszEasCzzKHfBSXOwOMiQ1+bY0ghR5nDSQ4GOekGNglfAB8F6PlIf6aBUgUyOFoRKlFYS8IHWabHeALsBRQ+p7AYxV/sj3nD3nA1lFAEANkJuKU/yxJ/OIvWsh4Ep0jZkMCYJirzuP4RUL2DK1iQJBQKQwId4htwqamiy3nd1uYlVm55skKzAJMnCxNbfSdnlBmbxF+jeuJkSg6Lsh1c3b6rU/psZq2O+3e9sK5jgWYGCUzEUCL8nCc72az2W7+K9PhT6Q0JICGY0+pGfh9T3BwVTtOkECrtMMisEWjdEVupTAsgWrn8SOp7wkW8BF+SUhtSICAqS9Yk2UmQugcpYpf2Q0JMKDVv2qM6TLzRPQEKxt1lcLQsGT16cOuDDLzBDsqB4mihgRIoMb+QRmXRWaeoIdEYZDeXgkfwMojPMolM09UOzWfQ2l2M3FU+zWPi/ZNRnhR7dlsNKkURkFjnV/qUimMg4LQHRvllZknElK+eLiVcTcTR8cz7EGDvif46HdvM9OsUhiLrmpHf6FfpTAWRXPnUfnRqyEBLgxV97LQrSEBNqr9/aI6MvMiUO3yB1cNGxKgs1Xt9ftuxozaGmgoXc/l0TMxGxUEaQnuaayrtJv5RqHc6NyQQAINVX7XuiGBFIrU3oNxrbLMvMjuzYpCxWXmjexFP6zsbiaBTLcfNe97Ihd5aa2GNCSQRyDH78Y0JJCHjJ2lqSV8yKBXCJrVkEAmqLEpyX/2aRh4W0vV/1ujPUix8PqOIJ/sf7vgYmdQmx+VQAvOql7urEC+ZicVi2cLArW53DsVjKuK0QjE3T7b1ntIHgTvcDbbclZ4SIG/ONnr1FsZIazMPxCksDuXP/FaApZTKK9+57frNyoYI7b/+7gGXbcK2e5ysZ1bVqHy3Ou269cpGlZ/6vf2679CtuV6N1mNO269cxTjPz+gbSOcpX04AAAAAElFTkSuQmCC' alt='logo' />
		<a href='#home' className='active'>Home</a>
		<a href="/login">Login</a>
		<a href='/shop'>Shop</a>
		<a href='/contact'>Contact</a>
		<a href="/signup">Signup</a>
	</div>
	
	<video autoPlay muted loop>
		<source src='https://player.vimeo.com/external/358531375.sd.mp4?s=d09259b1c740642def77cbc7b24c556b86e2597c&profile_id=164&oauth2_token_id=57447761' type="video/mp4" />
	</video>
	<div className='botto'>
		<h3><b>GET OUT & GO ALL IN</b></h3>
		<div className='para'>
			<p>Get out of your confort zone. Thats what our ACG Earthings discovered adventuring out across the mountainous countryside of Georgia to put the Holiday 2023 collection to the test.Originally designed on a research trip summiting Mount Hood,the collection is built to provide warmth and cold-weather protection to keep you moving in any condition.</p>
		</div>
		<div className='shop'>
  <a href='/shop'>Shop</a>
		</div>
		</div>
		<div className='category'>
			<div className='men'>
				<img src="https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="men" />
				<p>Shoes for Men</p>
			</div>
			<div className='women'>
				<img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600" alt="women" />
				<p>Shoes for Women</p>
			</div>
			<div className='kids'>
				<img src="https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=600" alt='kids' />
				<p>Shoes for Kids</p>

			</div>

		</div>
		
		
		<div style={{ maxWidth: 1500, marginLeft: 16, marginRight: 10, marginTop: 100 }}>
		<div className='spot'>
			<h4>In The Spotlight</h4>
			<h5 className='sop'><a href='/shop'>Shop</a></h5>
		
		</div>
		
      <Carosel
                show={3}
            >
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 2}}>
                        <img src="https://images.pexels.com/photos/40662/shoes-footwear-hiking-shoes-walking-40662.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carosel>
        </div>
		
	<div className='testo'>
		<div className='testo-card'>
			<div className='testo-img'>
    <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card1" />
	</div>
	<div className='card-info'>
		<p>My name John and I am a founder  and I had done Bachlor of Technology in Computer Science and Technology.</p>
	</div>
			</div>
			<div className='testo-card'>
			<div className='testo-img'>
    <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card1" />
	
	<div className='card-info'>
		<p>My name Jack and I am a CEO  and I had done Bachlor of Technology in Data Science.</p>
	</div>
	</div>
			</div>
			<div className='testo-card'>
			<div className='testo-img'>
    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card1" />
	</div>
	<div className='card-info'>
		<p>My name Johnson and I am a co-founder  and I had done Bachlor of Commerce in Marketing.</p>
	</div>
			</div>
		
	</div>
	<div className='footer'>
		<li>&copy;2022 Copyright & Privacy</li>
		<li>Terms & Condition</li>
		<li>Adidas</li>

	</div>
	
	</>
	
	
	


);
};

export default Home;
