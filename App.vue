<script>
	export default {
		onLaunch: function() {
			
			console.log(this.config.webUrl)
			this.lib.NetWork.On();
		},
		onShow: function() {
			console.log('App Show')
		}, 
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/uni.css';
	/*引入图标库*/
	@import './common/animate.css';
	@import './common/icon.css';
	@import './common/flexCoomn.css';
</style>
