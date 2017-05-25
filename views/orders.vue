<template>
	<div>
		<div class="root">
			<header class="ElemeHeader-wrapper_3axzyZv">
			<div class="ElemeHeader-wrapper_3axzyZv ElemeHeader-fixed_7Iy4oAG" style="background: rgb(0, 151, 255); z-index: 8844;">
				<a href="javascript:history.back()" class="ElemeHeader-left_2Jd8GcR">
					<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use></svg>
				</a>
				<h1 class="ElemeHeader-center__Vl_mYE">订单</h1>
			</div>
			</header>
            <section v-if="!orders.length&&!isRendering" class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" img="no-log" data-v-08f9d9b7="">
                <img src="https://github.elemecdn.com/eleme/fe-static/master/media/empty/no-log.png"> 
                <h3>近三个月无外卖订单记录</h3> <!----> <!---->
            </section>
            <section v-if="orders.length&&!isRendering" v-for="order in orders"  data-v-0701a830="" class="cart-group checkout-section">
				<h3 data-v-0701a830="" class="shopinfo"><img data-v-0701a830="" :src="order.shopInfo.image_path | shopImg">{{order.shopInfo.name}}</h3>
                <div data-v-0701a830="" class="fee">
                    <div data-v-0701a830="">订单编号</div>
                    <div data-v-0701a830="">{{order.id.split('_').join('')}}</div>
                </div>
                <div data-v-0701a830="" class="fee">
                    <div data-v-0701a830="">下单时间</div>
                    <div data-v-0701a830="">{{order.id | toDate}}</div>
                </div>
				<ul data-v-0701a830="" class="foodlist">
					<li v-for="food in order.foods" data-v-0701a830=""><span data-v-0701a830="" class="cellname">{{food.name}}</span><span data-v-0701a830="" class="cellquantity">x&nbsp;{{order.curQun}}</span><span data-v-0701a830="" class="celltotal">¥{{food.curQun * food.specfoods[0].price}}</span></li>
				</ul>
				<div data-v-0701a830="" class="fee"><div data-v-0701a830="">配送费</div><div data-v-0701a830="">¥{{order.shopInfo.float_delivery_fee}}</div></div>
				<div data-v-0701a830="" class="fee">
					<div data-v-0701a830="">餐盒</div>
					<div data-v-0701a830="">¥{{order.extra}}</div>
				</div>             
				<!---->
				<div data-v-0701a830="" class="total">
					总支付 ¥{{order.totalPrice}}
				</div>
			</section>
			<div>
				<div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" v-show="isRendering">
					<div class="Load-loading-main_1LVs9py">
						<div class="Load-loading-icon_2LvpNhI">
						</div>
						<div class="Load-loading-bottom_1G6-yJs">
						</div>
					</div>
				</div>
			</div>
		</div>
        <bnav :aindex="1"></bnav>
	</div>
</template>
<script>
	export default{
		data(){
			return{
                orders:[],
                isRendering:true,
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
			}
		},
		filters:{
			shopImg(value){
                return 'https://fuss10.elemecdn.com/'+ value.slice(0,1) + '/' + value.slice(1,3) + '/' + value.slice(3)+'.'+value.match(/jpeg|png/)[0];
            },
            toDate(value){
                return new Date(value.split('_')[1]*1).toLocaleString();
            }
		},
		created(){
            if(localStorage.hungerOrders){
                this.orders = JSON.parse(localStorage.hungerOrders)  
            }			
		},
        components:{
            bnav: function (resolve) {
                //异步组件写法
                require(['../components/navBar.vue'], resolve)
            },
        },
		mounted(){
            var that = this;
            setTimeout(function(){
                that.isRendering = false;
            },500)
            
		},
	}
</script>
<style lang="sass">
html,body{
    background-color: #f0f0f0;
    height: 100%;
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
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) repeat-x 0 100%;
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
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…I4NiAwIDEgMCAwLTE0LjU3MiA3LjI4NiA3LjI4NiAwIDAgMCAwIDE0LjU3MnoiLz48L3N2Zz4=) no-repeat .4rem;
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
    font-size: 0.42rem;
    font-weight: 600;
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
    font-size: .346667rem;
    color: #666;
    text-align: right;
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
    background: url(data:image/png;base64,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) no-repeat;
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
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZWxsaXBzZSBjeD0iNDgiIGN5PSIxMi40NjMiIGZpbGw9IiNEM0U2RkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQ3Ljg5IiByeT0iMTIuMzY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDM4KSIvPjwvc3ZnPg==) no-repeat;
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
.NoDataTip-wrapper_1Gwf0tm {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}.nodatatipWrap[data-v-08f9d9b7] {
    margin-top:50%;
}.NoDataTip-wrapper_1Gwf0tm img {
    display: block;
    width: 4rem;
    height: 2.266667rem;
}.NoDataTip-wrapper_1Gwf0tm h3 {
    margin: .333333rem 0 .266667rem;
    color: #6a6a6a;
    font-weight: 400;
    font-size: .453333rem;
}
@-webkit-keyframes Load-loading-change_2a9EPtC {
    to {
        background-position: 0 -12em
    }
}

@keyframes Load-loading-change_2a9EPtC {
    to {
        background-position: 0 -12em
    }
}

@-webkit-keyframes Load-loading-jump_13cecUT {
    to {
        -webkit-transform: translateY(-1.2em);
        transform: translateY(-1.2em)
    }
}

@keyframes Load-loading-jump_13cecUT {
    to {
        -webkit-transform: translateY(-1.2em);
        transform: translateY(-1.2em)
    }
}
</style>