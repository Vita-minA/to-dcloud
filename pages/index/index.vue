<template>
	<view class="board-wrapper square">
		<!--  #ifdef H5 || APP-PLUS -->
		<view class="">
			
		</view>
		<!--  #endif -->
		<!--  #ifdef MP-WEIXIN -->
		<chessboard :props="wxProps" @fuckTry="fuckTry" ref="board"></chessboard>
		<!--  #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.square {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
}
.board-wrapper {
    width: 100%;
    position: relative;
}
.board-container {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    box-sizing: border-box;
    border-radius: 24rpx;
}
</style>
