<template>
	<header class="index-3O8rT">
		<div class="index-MAORp">
			<div class="index-3vsmj">
				<svg class="index-3guVd"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use></svg><span class="index-1cnKa">黄浦区人民大道上海市政府上海市委</span><svg class="index-9eIfV"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use></svg>
			</div>
			<aside class="index-2LvmP">
			<div>
				<h2 class="index-17uRU">{{weather.temperature}}°</h2>
				<p class="index-3-P-K">
					{{weather.description}}
				</p>
			</div>
			<img alt="天气图标" class="index-wRPUE" :src="weather.image_hash | img_weather"></aside>
		</div>
		<form action="">
			<input type="text" placeholder="搜索商家、商品" onclick="location.href='search.html'" aria-label="搜索商家、商品" class="index-20Oji">
		</form>
		<div class="index-6hVEQ" v-if="tags">
			<a v-for="item in tags" :href="'/search/#/shop?keyword='+item.word+'&amp;geohash=wtw3sjq6n6um'">
		      {{item.word}}
			</a>
		</div>
		</header>
</template>
<script>
	export default{
		data(){
			return{
				tags:null,
				weather:{temperature: 29, code: "CLOUDY", description: "阴", image_hash: "37319e992e612e983f517e2690cb3e16png"},
			}
		},
		created(){
			this.$http.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=31.23037&longitude=121.473701').then(function(response){
				console.log(response)
				this.tags = response.body;
			},function(err){})
			this.$http.get('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=31.23037&longitude=121.473701').then(function(response){
				console.log(response.body)
				this.weather = response.body
			},function(err){})
			
		},
		filters:{
			img_weather(value){

				return 'https://fuss10.elemecdn.com/' + value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3) + '.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/';
			}
		}
	}
</script>
<style lang="sass">
	.index-3O8rT {
	    padding: .266667rem .373333rem;
	    background-color: #0096ff;
	    color: #fff;
	    height: 3.253333rem;
	}
	.index-3vsmj, .index-MAORp {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.index-MAORp {
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    height: .92rem;
	}
	.index-3vsmj {
	    max-width: 80%;
	}
	.index-1cnKa {
	    margin: 0 .133333rem;
	    font-size: .42rem;
	    max-width: 80%;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.index-9eIfV {
	    width: .186667rem;
	    height: .093333rem;
	    fill: #fff;
	}
	.index-2LvmP {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.index-17uRU {
	    font-size: .373333rem;
	}
	h1, h2, h3, h4, h5, h6, p {
	    margin: 0;
	    font-weight: 400;
	}
	.index-3-P-K {
	    font-size: .266667rem;
	}
	.index-wRPUE {
	    margin-left: .106667rem;
	    width: .733333rem;
	    height: .733333rem;
	}
	img {
	    max-width: 100%;
	}
	.index-20Oji {
	    display: block;
	    margin: .2rem 0;
	    width: 100%;
	    height: .96rem;
	    text-align: center;
	    border-radius: .96rem;
	    box-shadow: 0 .026667rem .066667rem 0 rgba(0,0,0,.2);
	    color: #333;
	    font-size: .346667rem;
	}
	button, input, select, textarea {
	    outline: 0;
	    border: none;
	    font-size: inherit;
	    font-family: inherit;
	}
	.index-6hVEQ {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    white-space: nowrap;
	    overflow-x: auto;
	    a{
	    	color: #fff;
	    }
	}
	.index-6hVEQ a:not(:last-child) {
	    margin-right: .4rem;
	}
	.index-3guVd {
	    width: .346667rem;
	    height: .413333rem;
	    fill: #fff;
	}
</style>