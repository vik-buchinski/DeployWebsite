define(["constants"],function(a){return{isImage:function(b){var c=b.name.split(".");if(c.length>0){var d=c[c.length-1].toLowerCase();if(a.SUPPORTED_IMAGES_FORMAT.indexOf(d)>-1)return!0}return!1}}});