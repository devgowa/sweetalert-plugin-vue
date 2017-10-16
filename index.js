
// # npm install sweetalert

import swal from 'sweetalert';
export default {
    open(params){
        swal(params.title, params.text, params.type);
    },
    success(params){
		const pd = {
			title:'Success!'
		};
		const p = Object.assign(pd,params);
		swal(p.title, p.text, "success");
	},
	error(params){
		const pd = {
			title:'Error!'
		};
		const p = Object.assign(pd,params);
		swal(p.title, p.text, "error");
	},
	confirm(params){
		const pd = {
			title:'Error!'
		};
		const p = Object.assign(pd,params);
		swal({
			title: p.title,
			text: p.text,
			icon: "warning",
			buttons: true,
			dangerMode: true
        }).then((willDelete)=>{
        	if(willDelete)
        	{
        		p.onSuccess();
        	}
        	else
        	{
        		swal('Di Batalkan.','Penghapusan Data Di Batalkan.','error');
        	}
        });
	}
}
// import sweetalert from './path/to/sweetalert';
// Vue.prototype.$swal = sweetalert;


// how to use 

// - default sweetalert : this.$swal.open({title:'some title',text:'text for body content',type:"error"}); // "warning", "error", "success" and "info".
// - success sweetalert : this.$swal.success({title:'some title',text:'text for body content'});
// - error sweetalert : this.$swal.error({title:'some title',text:'text for body content'});
// - confirmation sweetalert : 
// this.$swal.confirm({
	// title:'Are you sure want delete this data?!',
	// text:'Data can\'t restore if you do this.',
	// onSuccess:()=>{
	// 	`your own code here.`
	// }
// });
