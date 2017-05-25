<template>
	<div>
		<div class="root" style="padding-bottom: 1.4rem;">
			<header class="ElemeHeader-wrapper_3axzyZv">
			<div class="ElemeHeader-wrapper_3axzyZv ElemeHeader-fixed_7Iy4oAG" style="background: rgb(0, 151, 255); z-index: 8844;">
				<a href="javascript:history.back()" class="ElemeHeader-left_2Jd8GcR">
					<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use></svg>
				</a>
				<h1 class="ElemeHeader-center__Vl_mYE">确认订单</h1>
			</div>
			</header>
			<div class="checkout viewbody" ref="viewbody"  style="transform: translate3d(100px,0,0); opacity: 0;" >
				<div>
					<section data-v-74568ee4="" class="cart-address checkout-section">
					<div data-v-74568ee4="" class="address-item">
		    请添加一个收货地址
						<svg data-v-74568ee4=""><use data-v-74568ee4="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
					</div>
					</section><section class="delivery checkout-section">
					<div class="delivery-left">
						<span>送达时间</span>
					</div>
					<div class="delivery-select">
						<!----><span>尽快送达 | 预计13:22</span>
						<div class="delivery-extra">
							<span class="fengniao">蜂鸟专送</span><!----><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
						</div>
					</div>
					</section><section class="checkout-section"><section data-v-522bb7c6="">
					<div data-v-522bb7c6="" class="cart-item">
						<span data-v-522bb7c6="">支付方式</span><span data-v-522bb7c6="" class="cartitem-right">
		      在线支付
						<svg data-v-522bb7c6=""><use data-v-522bb7c6="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg></span>
					</div>
					<aside data-v-522bb7c6="" class="paylist"><header data-v-522bb7c6="" class="paylist-header">支付方式</header>
					<div data-v-522bb7c6="" class="paylist-item">
						<span data-v-522bb7c6="">在线支付</span><svg data-v-522bb7c6="" class="icon-select item-selected"><use data-v-522bb7c6="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select"></use></svg>
					</div>
					</aside>
					<div data-v-522bb7c6="" class="mask">
					</div>
					</section>
					<div class="cart-item disabled">
						<span>红包</span><span class="text-ellipsis cartitem-right">
		    暂时只在饿了么 APP 中支持
						<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg></span>
					</div>
					</section><section data-v-0701a830="" class="cart-group checkout-section">
					<h3 data-v-0701a830="" class="shopinfo"><img data-v-0701a830="" :src="orders.shopInfo.image_path | shopImg">{{orders.shopInfo.name}}</h3>
					<ul data-v-0701a830="" class="foodlist">
						<li v-for="order in orders.orderList" data-v-0701a830=""><span data-v-0701a830="" class="cellname">{{order.name}}</span><span data-v-0701a830="" class="cellquantity">x&nbsp;{{order.curQun}}</span><span data-v-0701a830="" class="celltotal">¥{{order.curQun * order.specfoods[0].price}}</span></li>
					</ul>
					<div data-v-0701a830="" class="fee"><div data-v-0701a830="">配送费</div><div data-v-0701a830="">¥{{orders.shopInfo.float_delivery_fee}}</div></div>
					<div data-v-0701a830="" class="fee">
						<div data-v-0701a830="">
							餐盒
						</div>
						<div data-v-0701a830="">
							¥{{orders.extra}}
						</div>
					</div>
					<!---->
					<div data-v-0701a830="" class="total">
						<div data-v-0701a830="">
							<span data-v-0701a830="">订单 ¥{{totalPrice}}</span>
		      &nbsp;&nbsp;
							<!---->
						</div>
						<span data-v-0701a830="">待支付 ¥{{totalPrice}}</span>
					</div>
					</section>
					<div>
						<section class="checkout-section"><a href="javascript:" class="">
						<div class="cart-item" @click="toggleTarget('remaskState',$event)">
							<span class="cartitem-left">订单备注</span><span class="text-ellipsis cartitem-right"><span>{{introduce}}</span><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg></span>
						</div>
						</a><a href="javascript:" class="">
						<div class="cart-item">
							<span class="cartitem-left">发票抬头</span><span class="text-ellipsis cartitem-right"><span>
		            不需要开发票
							<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg></span></span>
						</div>
						</a></section>
						<div class="serviceinfo">
							<a href="/service/#discount">
		      优惠说明  
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAYFBMVEUAAAC5ubmampqZmZmampqampqampqampqZmZmampqbm5ubm5uampqZmZmfn5+ZmZmZmZmampqenp6ampqampqbm5uampqampqampqampqampqZmZmbm5uZmZmampqZmZmUkPtTAAAAH3RSTlMABLPVTWPH+ufNaxzXkQyZinQmp4Yw811DrpoeGII1OyavHwAAASdJREFUOMuFVNuygzAIRNAk3q+995z9/7/s1DRBbWeyT8LAQhaQNphGLp11JY8T/UBWCCDcLz2/P4rsGJALTFV/jLoykHxPMKDZe/IGw4amY7RH1qwFd9FgW9A3CsshbYAG7EIwfEqipd9oka81pNEentfq8q+9NJKtXHn0LBYAzCm+aK0vJubcAGcs4J7BY4RoQqUZ70d3f8A9uCpMNKIO5gzbvdU5owyuGiOxUEAJ46nhok+YSo7W6fRY8yy0NS7J9Ue5Z+ASrd6RXb4DbirQYr84ZuCe0YbD96G4AHM0fB8sB4pzt7WFvR6KBp5T9fCaKq5XPxTV1M9F8ch3RYzsZ6tq6WzDfqgL52y3H2HHVC9XHXYsvafpXU/fS/rm0nebvv30/+MF8jcSdoSj17gAAAAASUVORK5CYII="></a>
						</div>
					</div>
					<footer>
					<span>待支付 ¥{{totalPrice}}</span><small style="display: none;">
		        ｜优惠 ¥0</small>
					<button class="submitbtn" @click="pay">确认下单</button>
					</footer>
				</div>
				<!---->
			</div>
			<div>
				<div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
					<div class="Load-loading-main_1LVs9py">
						<div class="Load-loading-icon_2LvpNhI">
						</div>
						<div class="Load-loading-bottom_1G6-yJs">
						</div>
					</div>
				</div>
			</div>
		</div>
		<transition name="rightIn">
			<div class="root" v-show="remaskState" style="position: fixed;top: 0; height: 100%;background: #fff;z-index: 9999;">
				<header class="ElemeHeader-wrapper_3axzyZv">
				<div class="ElemeHeader-wrapper_3axzyZv ElemeHeader-fixed_7Iy4oAG" style="background: rgb(0, 151, 255); z-index: 8844;">
					<div class="ElemeHeader-left_2Jd8GcR" @click="toggleTarget('remaskState',$event)">
						<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use></svg>
					</div>
					<h1 class="ElemeHeader-center__Vl_mYE">订单备注</h1>
				</div>
				</header>
				<div data-v-018b083e="" class="viewbody" >
					<section data-v-018b083e="" ref="int_tags">
						<h3 data-v-018b083e="">快速备注</h3>
						<div data-v-018b083e="" class="switch">
							<span @click="toggleSelect" data-v-018b083e="" class="switch-item">
				        不要辣
							</span>
							<span @click="toggleSelect" data-v-018b083e="" class="switch-item">
				        少点辣
							</span>
							<span @click="toggleSelect" data-v-018b083e="" class="switch-item">
				        多点辣
							</span>
						</div>
						<div data-v-018b083e="" class="switch">
							<span@click="toggleSelect"  data-v-018b083e="" class="switch-item">
				        不要香菜
							</span>
						</div>
						<div data-v-018b083e="" class="switch">
							<span @click="toggleSelect" data-v-018b083e="" class="switch-item">
				        不要洋葱
							</span>
						</div>
						<div data-v-018b083e="" class="switch">
							<span @click="toggleSelect" data-v-018b083e="" class="switch-item">
				        多点醋
							</span>
						</div>
						<div data-v-018b083e="" class="switch">
							<span @click="toggleSelect" data-v-018b083e="" class="switch-item">
				        多点葱
							</span>
						</div>
					</section>
					<section data-v-018b083e="" ref="int_text">
						<h3 data-v-018b083e="">其他备注</h3>
						<textarea data-v-018b083e="" placeholder="请输入备注内容(可不填)" maxlength="100"></textarea>
					</section>
					<button data-v-018b083e="" class="btn-block submit" @click="addIntroduce">确定</button>
				</div>
				<div>
					<div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
						<div class="Load-loading-main_1LVs9py">
							<div class="Load-loading-icon_2LvpNhI">
							</div>
							<div class="Load-loading-bottom_1G6-yJs">
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				orders:{},
				totalPrice:0,
				remaskState:false,
				introduce:'口味、偏好等',
			}
		},
		methods:{
			countTotal(){
				var that = this;
				var temp = 0;
				this.orders.orderList.forEach(function(item){
					temp += (item.curQun * item.specfoods[0].price);
				})
				this.totalPrice = temp;
				this.totalPrice += this.orders.extra || 0;
				this.totalPrice += this.orders.shopInfo.float_delivery_fee || 0;
			},
			showTarget(target,event){
				this[target] = true;
			},
			toggleTarget(target,event){
				this[target] = !this[target];
			},
			pay(){
				var obj = {};
				var arr;
				if(localStorage.hungerOrders){
					arr = JSON.parse(localStorage.hungerOrders);
				}else{
					arr = [];
				}
				arr.push({
					id: (this.orders.shopInfo.id || authentic_id) + '_' + new Date()*1,
					foods:this.orders.orderList,
					shopInfo:this.orders.shopInfo,
					extra:this.orders.extra,
					totalPrice:this.totalPrice
				})

				localStorage.hungerOrders = JSON.stringify(arr);
				localStorage.hungerOrder = '';
				localStorage.hungerCache = '';
				location.href = 'orders.html';
			},
			toggleSelect(event){
				if(event.target.classList.contains('selected')){
					event.target.classList.remove('selected')
				}else{
					event.target.classList.add('selected')
				}				
			},
			addIntroduce(){
				var that = this;
				this.introduce = '';
				this.$refs.int_tags.querySelectorAll('.switch-item.selected').forEach(function(item){
						that.introduce += item.innerText.trim() +','
				})
				this.introduce += this.$refs.int_text.querySelector('textarea').value;				
				this.remaskState == ''?'口味、偏好等':this.remaskState;
				this.remaskState = false;
			}
		},
		filters:{
			shopImg(value){
				return 'https://fuss10.elemecdn.com/'+ value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3)+'.'+value.match(/jpeg|png/)[0];
			},
		},
		created(){
			this.orders = JSON.parse(localStorage.hungerOrder)
			this.countTotal();
			//console.log(JSON.parse(localStorage.hungerOrder))
		},
		mounted(){
			var that = this;
			setTimeout(function(){
				that.$refs.viewbody.style.transform = '';
				that.$refs.viewbody.style.opacity = '';			
			},17)
		},
	}
</script>
<style lang="sass">
.rightIn-enter-active, .rightIn-leave {
    -webkit-transition: transform 200ms ease;
    transition: transform 200ms ease;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
.rightIn-enter, .rightIn-leave-active{
	-webkit-transition: transform 200ms ease;
	transition: transform 200ms ease;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
}
.root, .viewbody {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.ElemeHeader-wrapper_3axzyZv {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
}.ElemeHeader-wrapper_3axzyZv.ElemeHeader-fixed_7Iy4oAG {
    position: fixed;
    top: 0;
    left: 0;
}.ElemeHeader-left_2Jd8GcR {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
}.ElemeHeader-left_2Jd8GcR svg {
    display: block;
    width: .586667rem;
    height: .586667rem;
}.ElemeHeader-center__Vl_mYE {
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}.checkout {
    font-size: .426667rem;
    color: #333;
    padding-bottom: 1.413333rem;
}.viewbody {
    width: 100%;
    -webkit-transition: opacity .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),transform .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
}.checkout-section {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}.checkout-section:first-of-type {
    border-top: 0;
}.checkout-section:not(:last-child) {
    margin-bottom: .266667rem;
}.cart-address[data-v-74568ee4] {
    background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) repeat-x 0 100%;
    min-height: 2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}.cart-address .address-item[data-v-74568ee4] {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
    padding: 0 .613333rem 0 1.133333rem;
    margin-bottom: .066667rem;
    position: relative;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSA0MiI+PHBhdGggZmlsbD0iIzMxOTBFOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNTQ4IDQwLjU5MmMuMTQ3LjEzNCAxLjE1My45NTcgMi40NTIuOTY0IDEuMy4wMDYgMi4zMjItLjg1NSAyLjQ1OC0uOTc5QzI0LjE2OCAzNi4zMDMgMzQgMjYuMjggMzQgMTcuMDc5IDM0IDcuNjQ3IDI2LjM4OSAwIDE3IDBTMCA3LjY0NyAwIDE3LjA4Yy0uMDY2IDkuMjEgOS44MjUgMTkuMjQ4IDE0LjU0OCAyMy41MTJ6TTE3IDI0LjI4NmE3LjI4NiA3LjI4NiAwIDEgMCAwLTE0LjU3MiA3LjI4NiA3LjI4NiAwIDAgMCAwIDE0LjU3MnoiLz48L3N2Zz4=) no-repeat .4rem;
    background-size: .4rem;
}.cart-address .address-item svg[data-v-74568ee4] {
    position: absolute;
    right: .346667rem;
    top: 50%;
    width: .4rem;
    height: .4rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}.checkout-section {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}.delivery {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-left: 0;
    border-left: .133333rem solid #3190e8;
    padding: .266667rem .4rem;
}.checkout-section:not(:last-child) {
    margin-bottom: .266667rem;
}.checkout-section {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}.delivery {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-left: 0;
    border-left: .133333rem solid #3190e8;
    padding: .266667rem .4rem;
}.checkout-section:not(:last-child) {
    margin-bottom: .266667rem;
}.delivery-left {
    font-weight: 700;
}.delivery-select {
    margin-left: 2em;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: right;
    color: #3190e8;
}.delivery-extra {
    margin-top: .213333rem;
    padding-top: .213333rem;
    border-top: 1px solid #eee;
    font-size: .293333rem;
    word-spacing: .066667rem;
}.delivery-extra .fengniao {
    background-color: #57a9ff;
    border: 1px solid #57a9ff;
    color: #fff;
    border-radius: .066667rem;
}.delivery-extra .fengniao, .delivery-extra .ontime b {
    display: inline-block;
    padding: .066667rem .106667rem;
    line-height: 1;
}.delivery svg {
    margin-left: .133333rem;
    width: .32rem;
    height: .32rem;
}.delivery-extra svg {
    vertical-align: middle;
}.checkout-section {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}.checkout-section:not(:last-child) {
    margin-bottom: .266667rem;
}.cart-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .24rem .346667rem .28rem 0;
    font-size: .426667rem;
    color: #333;
    margin-left: .386667rem;
    border-bottom: .013333rem solid #eee;
}.cart-item .cartitem-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    font-size: .346667rem;
    max-width: 6.933333rem;
}.cart-item svg {
    margin-left: .133333rem;
    width: .32rem;
    height: .32rem;
    fill: #b7b7b7;
}.paylist[data-v-522bb7c6] {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 100;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    will-change: transform;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    opacity: .7;
    visibility: hidden;
    height: 7.053333rem;
}.paylist-header[data-v-522bb7c6] {
    background-color: #fafafa;
    text-align: center;
    line-height: 1.173333rem;
}.paylist-item[data-v-522bb7c6] {
    height: 1.733333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 .466667rem;
    border-bottom: .013333rem solid #eee;
}svg.icon-select {
    fill: #eee;
    width: .48rem;
    height: .48rem;
    float: right;
    margin-top: .08rem;
}.item-selected.icon-select {
    fill: #4cd964;
}.mask[data-v-522bb7c6] {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity .15s ease-in-out;
    transition: opacity .15s ease-in-out;
    will-change: opacity;
    background-color: rgba(0,0,0,.3);
}.cart-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .24rem .346667rem .28rem 0;
    font-size: .426667rem;
    color: #333;
    margin-left: .386667rem;
    border-bottom: .013333rem solid #eee;
}.cart-item:not(:first-child) {
    border-top: .013333rem solid #d8d8d8;
}.cart-item.disabled, .cart-item.disabled a, .cart-item.disabled span {
    color: #bbb;
}.cart-item.disabled, .cart-item.disabled a, .cart-item.disabled span {
    color: #bbb;
}.text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}.cart-item .cartitem-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    font-size: .346667rem;
    max-width: 6.933333rem;
}.cart-item.disabled, .cart-item.disabled a, .cart-item.disabled span {
    color: #bbb;
}.cart-item svg {
    margin-left: .133333rem;
    width: .32rem;
    height: .32rem;
    fill: #b7b7b7;
}.checkout-section {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}.checkout-section:not(:last-child) {
    margin-bottom: .266667rem;
}.shopinfo[data-v-0701a830] {
    padding: .266667rem .4rem;
    border-bottom: .013333rem solid #eee;
}h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: 400;
}.shopinfo img[data-v-0701a830] {
    margin-right: .133333rem;
    width: .506667rem;
    height: .506667rem;
    vertical-align: middle;
}.foodlist[data-v-0701a830] {
    padding: .2rem .4rem;
    color: #666;
    font-size: .346667rem;
    border-bottom: .013333rem solid #eee;
}.foodlist li[data-v-0701a830] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    font-size: .373333rem;
    color: inherit;
    padding: .2rem 0;
}.foodlist li .cellname[data-v-0701a830] {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-flex: 9;
    -webkit-flex: 9;
    -ms-flex: 9;
    flex: 9;
    display: block;
    width: 0;
}.foodlist li .cellquantity[data-v-0701a830] {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: right;
    color: #999;
}.foodlist li .celltotal[data-v-0701a830] {
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    display: block;
    width: 0;
    text-align: right;
}.fee[data-v-0701a830] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #666;
}.activities[data-v-0701a830], .fee[data-v-0701a830] {
    padding: .266667rem .4rem;
    font-size: .32rem;
    border-bottom: 1px solid #eee;
}.total[data-v-0701a830] {
    padding: .266667rem .4rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .346667rem;
    color: #666;
}.checkout-section {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}.checkout-section:first-of-type {
    border-top: 0;
}.checkout-section:not(:last-child) {
    margin-bottom: .266667rem;
}.checkout a {
    font-size: .373333rem;
}.cart-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .24rem .346667rem .28rem 0;
    font-size: .426667rem;
    color: #333;
    margin-left: .386667rem;
    border-bottom: .013333rem solid #eee;
}.text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}.cart-item .cartitem-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    font-size: .346667rem;
    max-width: 6.933333rem;
}.cart-item svg {
    margin-left: .133333rem;
    width: .32rem;
    height: .32rem;
    fill: #b7b7b7;
}.serviceinfo {
    text-align: right;
    margin-top: -.133333rem;
    padding: 0 .4rem;
}.serviceinfo a {
    color: #999;
    font-size: .32rem;
}.serviceinfo img {
    width: .32rem;
    height: .32rem;
    vertical-align: middle;
}footer {
    height: 1.173333rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #3c3c3c;
}footer span {
    color: #fff;
    font-size: .48rem;
    line-height: 1.173333rem;
    padding-left: .266667rem;
}footer small {
    color: #999;
    font-size: .32rem;
}button, input, select, textarea {
    outline: 0;
    border: none;
    font-size: inherit;
    font-family: inherit;
}footer .submitbtn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: #56d176;
    min-width: 2.8rem;
    padding: 0 .133333rem;
    border: none;
    color: #fff;
    font-size: .453333rem;
}.Load-wrapper_3h35P-W {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}.Load-wrapper_3h35P-W.Load-fixed_1L8WA4k {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8888;
    width: 100%;
    height: 100%;
}.Load-loading-main_1LVs9py {
    position: relative;
    margin-top: 1em;
    width: 2em;
    height: 2em;
    font-size: .666667rem;
}.Load-loading-icon_2LvpNhI {
    z-index: 5;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAK8CAMAAAAuzuoNAAAC7lBMV…ru+0GF/hsjeXeXUAVe4nTgJIurSIzzKnCS7umDDg/dzC3zHUwUelB6Wq7DAAAAAElFTkSuQmCC) no-repeat;
    -webkit-animation: Load-loading-change_2a9EPtC 3.6s infinite steps(6),Load-loading-jump_13cecUT .3s ease-in-out infinite alternate;
    animation: Load-loading-change_2a9EPtC 3.6s infinite steps(6),Load-loading-jump_13cecUT .3s ease-in-out infinite alternate;
}.Load-loading-bottom_1G6-yJs, .Load-loading-icon_2LvpNhI {
    position: absolute;
    width: 2em;
    height: 2em;
    background-size: 100% auto;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
}.Load-loading-bottom_1G6-yJs {
    bottom: -.9em;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…Q3Ljg5IiByeT0iMTIuMzY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDM4KSIvPjwvc3ZnPg==) no-repeat;
    -webkit-animation: Load-loading-scale_1arp5U- .3s ease-in-out infinite alternate;
    animation: Load-loading-scale_1arp5U- .3s ease-in-out infinite alternate;
}section[data-v-018b083e] {
    padding: .346667rem .4rem;
    background-color: #fff;
    margin: .266667rem 0;
}h3[data-v-018b083e] {
    color: #666;
    margin-bottom: .16rem;
    font-size: .346667rem;
}.switch[data-v-018b083e] {
    display: inline-block;
    margin: 0 .266667rem .266667rem 0;
    border: 2px solid #3190e8;
    border-radius: .106667rem;
    overflow: hidden;
    font-size: .346667rem;
}.switch-item[data-v-018b083e] {
    display: inline-block;
    padding: .24rem .293333rem;
    line-height: 1;
    min-width: 1.733333rem;
    text-align: center;
    color: #666;
}.switch-item[data-v-018b083e]:not(:last-child) {
    border-right: 2px solid #3190e8;
}textarea[data-v-018b083e] {
    width: 100%;
    height: 2.4rem;
    padding: .266667rem;
    border: 1px solid #ccc;
    border-radius: .066667rem;
    font-size: .373333rem;
    background-color: #f9f9f9;
    color: #666;
    resize: none;
}button, input, select, textarea {
    outline: 0;
    border: none;
    font-size: inherit;
    font-family: inherit;
}
.switch-item.selected[data-v-018b083e] {
    background: #3190e8;
    color: #fff;
}
button[data-v-018b083e] {
    display: block;
    width: 9.2rem;
    margin: 0 auto;
}button.submit[data-v-018b083e] {
    color: #fff;
    background-color: #4cd964;
    padding:0.3rem 0;
    border-radius: .106667rem;
}
</style>