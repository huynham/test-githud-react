import '../App1.css';


function Phan12() {
    return (
        <div id="phan12">

		<div className="phan12div1">
			<h1 className="phan12div1h1">GET IN TOUCH</h1>
			<hr/>
			<p className="phan12div1p1">We thrive when coming up with innovative ideas but also understand that a smart concept should be
				<br/> supported with measurable results.</p>


		</div>

		<div className="phan121">
			<div className="phan121div1">
				<p className="div1p1">Office Address 1:</p>
				<span>4461 Cedar Street Moro, AR 72368</span>
				<p className="div1p2">Office Address 2:</p>
				<span>2467 Swick Hill Street<br/>
            New Orleans, LA 70171</span>
				<p className="div1p3">Working Hours:</p>
				<span>9:00AM To 6:00PM</span>
			</div>
			<div className="phan121div2">
				<form>
					<input name="name1" placeholder="Your Name*" type="text" className="inp1" />
					<input name="name2" placeholder="Your Email*" type="text" className="inp2" />
					<input name="name3" placeholder="Your Subject" type="text" className="inp3" />
					<textarea name="comments" id="comments" rows="4" className="text1" placeholder="Your message..."></textarea>
					<button><a href="#">Send message</a>
					</button>
				</form>

			</div>

		</div>
	</div>

    )
}

export default Phan12;