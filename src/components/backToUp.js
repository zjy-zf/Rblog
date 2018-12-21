import React, { Component } from 'react'

class BackToUp extends Component {
	constructor(props) {
		super(props)
		this.backToTop.bind(this)
		this.updateIconToTop.bind(this)
		this.handleScoll.bind(this)
		this.textSpan = React.createRef()
		this.backToUpDom = React.createRef()
		this.state = {
			isRunning: false
		};
	}

	updateIconToTop(percent) {
	  let dom = this.textSpan.current;
	  dom.innerText = percent;
	  if(percent < 1) {
	    this.backToUpDom.current.className = "back-to-top hidden";
	  } else {
	    this.backToUpDom.current.className = "back-to-top";
	  }
	}

	handleScoll() {
	  return () => {
	    if (this.state.isRunning) return;
	    this.setState({
	    	isRunning: true
	    })
	    window.requestAnimationFrame(timestamp => {
	      let scrollTop =
	          document.documentElement.scrollTop || document.body.scrollTop,
	        scrollHeight =
	          document.documentElement.scrollHeight ||
	          document.body.scrollHeight,
	        clientHeight =
	          document.documentElement.clientHeight ||
	          document.body.clientHeight;
	      this.setState({
		    	isRunning: false
		    })
	      if (scrollTop <= 1) {
	        this.updateIconToTop(0);
	        return;
	      }
	      if (scrollTop + clientHeight >= scrollHeight) {
	        this.updateIconToTop(100);
	      } else {
	        this.updateIconToTop(parseInt(
	          100 * scrollTop / (scrollHeight - clientHeight),
	          10
	        ));
	      }
	    });
	  };
	}

	backToTop() {
	  let scrollTop =
	      document.documentElement.scrollTop || document.body.scrollTop,
	    delay = 10,
	    time = 200;
	  if (scrollTop <= 20) {
	    document.documentElement.scrollTop = 0;
	    document.body.scrollTop = 0;
	    return;
	  }
	  let step = Math.ceil(scrollTop * delay / time);
	  let timer = setInterval(() => {
	    scrollTop =
	      document.documentElement.scrollTop || document.body.scrollTop;
	    if (scrollTop - step <= 0) {
	      document.documentElement.scrollTop = 0;
	      document.body.scrollTop = 0;
	      clearInterval(timer);
	    } else {
	      document.documentElement.scrollTop = scrollTop - step;
	      document.body.scrollTop = scrollTop - step;
	    }
	  }, delay);
	}

	componentDidMount() {
		document.addEventListener("scroll", this.handleScoll(), false);
	}

	render() {
		return (
			<div className="back-to-top hidden" onClick={this.backToTop} ref={this.backToUpDom}>
			  <span>
			    <i className="iconfont icon-60"></i><span ref={this.textSpan}></span>%
			  </span>
			</div>
		)
	}
}

export default BackToUp