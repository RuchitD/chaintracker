 1.	Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation? \
	 a.	I'd say that the design and the choice of backend were a bit suboptimal, in addition I feel like I could have implemented a forced refresh button because that was something I had wanted to do as well. I could have made the app more fluid as well
2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)\
	a. The app is quite simple and to the point itself. I think one of the overdesigned features I added was the constant refresh and the timer itself of the refresh which lets people know the site is live refreshing. 
3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?\
	a. If I was serving the API myself then I would have scaling issues at 100 users/second but if I used a CDN like netlify or vercel then I wouldn't need to worry about that.  (Of course I'd need a higher tier to handle the flow of users)
4. What are some other enhancements you would have made, if you had more time to do this implementation\
	a. One of the few enhancements I'd like to make is a drop down menu that lets me chose between multiple currencies and comparing them. Another one that I was thinking about was a graph embed pulled from either Coinbase or Binance that shows the difference over time
