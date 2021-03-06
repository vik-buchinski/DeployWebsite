this["JST"] = this["JST"] || {};

this["JST"]["pages/admin/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin.about-page.page-title"))) == null ? '' : __t) +
'</h3>\r\n\r\n<form class="breadcrumb">\r\n    <div class="form-group">\r\n        <label>' +
((__t = ($.i18n.t("admin.about-page.choose_title_image"))) == null ? '' : __t) +
'</label>\r\n        <div class="row">\r\n            <div class="col-sm-offset-0 col-sm-3">\r\n                <img id="title_image" src="';
 if(data && data.title_image_url) {;
__p += ' ' +
((__t = (data.title_image_url)) == null ? '' : __t) +
' ';
 } else { ;
__p += './img/placeholder_300x300.png';
 } ;
__p += '" class="img-responsive img-thumbnail">\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <span class="alert-danger"><b>' +
((__t = ($.i18n.t("admin.about-page.title-image-alert"))) == null ? '' : __t) +
'</b></span>\r\n        <input id="title_image_input" name="title_image_input" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\r\n    </div>\r\n    <button id="save_title_image_btn" class="btn btn-default">' +
((__t = ($.i18n.t("admin.about-page.save-btn"))) == null ? '' : __t) +
'</button>\r\n    <button id="delete_title_image_btn" class="btn btn-danger">' +
((__t = ($.i18n.t("admin.about-page.delete-btn"))) == null ? '' : __t) +
'</button>\r\n</form>\r\n\r\n<br/>\r\n\r\n<form class="breadcrumb">\r\n    <div class="form-group">\r\n        <label for="image-row">' +
((__t = ($.i18n.t("admin.about-page.choose-photo-title"))) == null ? '' : __t) +
'</label>\r\n        <div class="row" id="image-row">\r\n            <div class="col-sm-offset-0 col-sm-3">\r\n                <img id="content_image" src="';
 if(data && data.image_url) {;
__p += ' ' +
((__t = (data.image_url)) == null ? '' : __t) +
' ';
 } else { ;
__p += './img/placeholder_300x300.png';
 } ;
__p += '" class="img-responsive img-thumbnail">\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <input id="content_image_input" name="content_image_input" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\r\n    </div>\r\n    <div class="form-group">\r\n        <label for="description">' +
((__t = ($.i18n.t("admin.about-page.description-title"))) == null ? '' : __t) +
'</label>\r\n        <textarea cols="80" id="description" rows="8">';
 if(data && data.description) {;
__p += ' ' +
((__t = (data.description)) == null ? '' : __t) +
' ';
 } ;
__p += '</textarea>\r\n    </div>\r\n    <button id="submit-btn" class="btn btn-default">' +
((__t = ($.i18n.t("admin.about-page.save-btn"))) == null ? '' : __t) +
'</button>\r\n</form>\r\n';

}
return __p
};

this["JST"]["pages/admin/album.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin.album-page.page-title"))) == null ? '' : __t) +
'</h3>\r\n<div class="breadcrumb">\r\n    ';
 if(!data.is_expaned) { ;
__p += '\r\n        <div class="form-group">\r\n            <label for="album-edit-photo-row">' +
((__t = ($.i18n.t("admin.album-page.album-image"))) == null ? '' : __t) +
'</label>\r\n            <div class="row" id="album-edit-photo-row">\r\n                <div class="col-sm-offset-0 col-sm-3">\r\n                    <img id="album-image-preview" src="';
 if(data && data.album_main_image) { ;
__p +=
((__t = (data.album_main_image)) == null ? '' : __t);
 } else { ;
__p += './img/placeholder_300x300.png';
 } ;
__p += '" class="img-responsive img-thumbnail">\r\n                </div>\r\n            </div>\r\n            <br />\r\n            <span class="alert-danger"><b>' +
((__t = ($.i18n.t("admin.album-page.album-image-alert"))) == null ? '' : __t) +
'</b></span>\r\n            <input id="album-image" name="album-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\r\n        </div>\r\n\r\n        <div class="form-group row">\r\n            <div class="col-xs-3">\r\n                <label for="album-name">' +
((__t = ($.i18n.t("admin.album-page.album-name"))) == null ? '' : __t) +
'</label>\r\n                <input type="text" class="form-control" id="album-name" placeholder="' +
((__t = ($.i18n.t('admin.album-page.album-name'))) == null ? '' : __t) +
'" ';
 if(data && data.album_name) { ;
__p += 'value="' +
((__t = (data.album_name)) == null ? '' : __t) +
'"';
 } ;
__p += '/>\r\n            </div>\r\n        </div>\r\n    ';
 } ;
__p += '\r\n\r\n    <div class="form-group">\r\n        <label for="album-description">' +
((__t = ($.i18n.t("admin.album-page.album-description"))) == null ? '' : __t) +
'</label>\r\n        <textarea cols="80" id="album-description" rows="8">';
 if(data && data.album_description) {;
__p += ' ' +
((__t = (data.album_description)) == null ? '' : __t) +
' ';
 } ;
__p += '</textarea>\r\n    </div>\r\n    \r\n    ';
 if(!data.is_expaned) { ;
__p += '\r\n        <div class="checkbox">\r\n            <label>\r\n                <input id="is-album-visible" type="checkbox" ';
 if(data && data.is_visible){ ;
__p += 'checked';
 } ;
__p += '> <b>Is Album visible</b>\r\n            </label>\r\n        </div>\r\n    ';
 } ;
__p += '\r\n\r\n    <button id="save-album-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.album-page.save-btn"))) == null ? '' : __t) +
'</button>\r\n</div>\r\n\r\n<iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe" style="visibility: hidden;"></iframe>\r\n<div class="breadcrumb">\r\n    <div class="form-group">\r\n        <label for="add-photo-row">' +
((__t = ($.i18n.t("admin.album-page.choose-title"))) == null ? '' : __t) +
'</label>\r\n        <div class="row" id="add-photo-row">\r\n            <div class="col-sm-offset-0 col-sm-3">\r\n                <img id="adding-image-preview" src="./img/placeholder_300x300.png" class="img-responsive img-thumbnail">\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <input id="adding-image" name="adding-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\r\n    </div>\r\n    <div class="form-group row">\r\n        <div class="col-xs-3">\r\n            <label for="image-description">' +
((__t = ($.i18n.t("admin.album-page.description"))) == null ? '' : __t) +
'</label>\r\n            <input type="text" class="form-control" id="image-description" placeholder="description">\r\n        </div>\r\n    </div>\r\n    <button id="submit-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.album-page.add-btn"))) == null ? '' : __t) +
'</button>\r\n</div>\r\n\r\n<br/>\r\n\r\n<div class="panel panel-default">\r\n    <div class="panel-heading">' +
((__t = ($.i18n.t("admin.album-page.list-title"))) == null ? '' : __t) +
'</div>\r\n    <div class="panel-body">\r\n        ';
 if(data.images && data.images.length > 0) { ;
__p += '\r\n            ';
 _.each(data.images, function(photo) { ;
__p += '\r\n                <div class="media preview-obj img-thumbnail">\r\n                    <div class="media-left">\r\n                        <img class="media-object" src="' +
((__t = (photo.image_url)) == null ? '' : __t) +
'">\r\n                    </div>\r\n                    <div class="media-body">\r\n                        <h4 class="media-heading">' +
((__t = (photo.description)) == null ? '' : __t) +
'</h4>\r\n                        <div class="media-actonbar">\r\n                            <button id="delete-btn" class="btn btn-danger" data-photo-number="' +
((__t = (photo.id)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\r\n                            <button id="edit-btn" class="btn btn-primary" data-photo-number="' +
((__t = (photo.id)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.album-page.edit"))) == null ? '' : __t) +
'</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            ';
 }); ;
__p += '\r\n        ';
 } else { ;
__p += '\r\n            <span>' +
((__t = ($.i18n.t("admin.album-page.no-images"))) == null ? '' : __t) +
'</span>\r\n        ';
 } ;
__p += '\r\n    </div>\r\n</div>\r\n\r\n<div id="confirm-modal" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n                <h4 class="modal-title">' +
((__t = ($.i18n.t("admin.album-page.confirm-title"))) == null ? '' : __t) +
'</h4>\r\n            </div>\r\n            <div class="modal-body">\r\n                <p>' +
((__t = ($.i18n.t("admin.album-page.confirmation-text"))) == null ? '' : __t) +
'</p>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <button type="button" class="btn btn-default" data-dismiss="modal">' +
((__t = ($.i18n.t("admin.album-page.modal-cancel"))) == null ? '' : __t) +
'</button>\r\n                <button type="button" class="btn btn-primary" id="confirm-delete-btn">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id="edit-photo-modal" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n                <h4 class="modal-title" id="edit-photo-name">' +
((__t = ($.i18n.t("admin.album-page.edit-modal-title"))) == null ? '' : __t) +
'</h4>\r\n            </div>\r\n            <div class="modal-body">\r\n                <div>\r\n                    <div class="form-group">\r\n                        <label for="edit-photo-row">' +
((__t = ($.i18n.t("admin.album-page.photo-description"))) == null ? '' : __t) +
'</label>\r\n                        <div class="row" id="edit-photo-row">\r\n                            <div class="col-sm-offset-0 col-sm-3">\r\n                                <img id="edit-image" src="./img/placeholder_300x300.png" class="img-responsive img-thumbnail">\r\n                            </div>\r\n                        </div>\r\n                        <br />\r\n                        <input id="edit-avatar-image" name="edit-avatar-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\r\n                    </div>\r\n                    <div class="form-group row">\r\n                        <div class="col-xs-6">\r\n                            <label for="edit-image-description">' +
((__t = ($.i18n.t("admin.album-page.description"))) == null ? '' : __t) +
'</label>\r\n                            <input type="text" class="form-control" id="edit-image-description" placeholder="description">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <button type="button" class="btn btn-default" data-dismiss="modal">' +
((__t = ($.i18n.t("admin.album-page.modal-cancel"))) == null ? '' : __t) +
'</button>\r\n                <button type="button" class="btn btn-primary" id="save-changes-btn">' +
((__t = ($.i18n.t("admin.album-page.modal-save-changes"))) == null ? '' : __t) +
'</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["pages/admin/albums_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin." + album_type + ".page-header"))) == null ? '' : __t) +
'</h3>\r\n<div class="breadcrumb">\r\n        <div class="form-group">\r\n            <label for="album-edit-photo-row">' +
((__t = ($.i18n.t("admin.album-page.add-new-album"))) == null ? '' : __t) +
'</label>\r\n            <div class="row" id="album-edit-photo-row">\r\n                <div class="col-sm-offset-0 col-sm-3">\r\n                    <img id="album-image-preview" src="./img/placeholder_300x300.png" class="img-responsive img-thumbnail">\r\n                </div>\r\n            </div>\r\n            <br />\r\n            <span class="alert-danger"><b>' +
((__t = ($.i18n.t("admin.album-page.album-image-alert"))) == null ? '' : __t) +
'</b></span>\r\n            <input id="album-image" name="album-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\r\n        </div>\r\n\r\n    <div class="form-group row">\r\n        <div class="col-xs-3">\r\n            <label for="album-name">' +
((__t = ($.i18n.t("admin.album-page.album-name"))) == null ? '' : __t) +
'</label>\r\n            <input type="text" class="form-control" id="album-name" placeholder="' +
((__t = ($.i18n.t('admin.album-page.album-name'))) == null ? '' : __t) +
'"/>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="album-description">' +
((__t = ($.i18n.t("admin.album-page.album-description"))) == null ? '' : __t) +
'</label>\r\n        <textarea cols="80" id="album-description" rows="8"></textarea>\r\n    </div>\r\n\r\n    <button id="save-album-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.album-page.add-new-album-btn"))) == null ? '' : __t) +
'</button>\r\n</div>\r\n\r\n<br/>\r\n\r\n<div class="panel panel-default">\r\n    <div class="panel-heading">' +
((__t = ($.i18n.t("admin.album-page.albums-list-title"))) == null ? '' : __t) +
'</div>\r\n    <div class="panel-body">\r\n        ';
 if(albums && albums.length > 0) { ;
__p += '\r\n            ';
 _.each(albums, function(album) { ;
__p += '\r\n                <div class="media preview-obj img-thumbnail">\r\n                    <div class="media-left">\r\n                        <img class="media-object" src="' +
((__t = (album.album_main_image)) == null ? '' : __t) +
'">\r\n                    </div>\r\n                    <div class="media-body">\r\n                        <h4 class="media-heading">' +
((__t = (album.album_name)) == null ? '' : __t) +
'</h4>\r\n                        <p class="media-heading">' +
((__t = ($.i18n.t("admin.album-page.is-visible-text"))) == null ? '' : __t) +
'' +
((__t = (album.is_visible)) == null ? '' : __t) +
'</p>\r\n                        <div class="media-actonbar">\r\n                            <a href="#admin/album/' +
((__t = (album.id)) == null ? '' : __t) +
'" class="btn btn-primary">' +
((__t = ($.i18n.t("admin.album-page.edit"))) == null ? '' : __t) +
'</a>\r\n                            <button id="delete-btn" class="btn btn-danger" data-album-number="' +
((__t = (album.id)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            ';
 }); ;
__p += '\r\n        ';
 } else { ;
__p += '\r\n            <span>' +
((__t = ($.i18n.t("admin.album-page.no-albums"))) == null ? '' : __t) +
'</span>\r\n        ';
 } ;
__p += '\r\n    </div>\r\n</div>\r\n\r\n<div id="confirm-modal" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n                <h4 class="modal-title">' +
((__t = ($.i18n.t("admin.album-page.confirm-title"))) == null ? '' : __t) +
'</h4>\r\n            </div>\r\n            <div class="modal-body">\r\n                <p>' +
((__t = ($.i18n.t("admin.album-page.confirmation-album-text"))) == null ? '' : __t) +
'</p>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <button type="button" class="btn btn-default" data-dismiss="modal">' +
((__t = ($.i18n.t("admin.album-page.modal-cancel"))) == null ? '' : __t) +
'</button>\r\n                <button type="button" class="btn btn-primary" id="confirm-delete-btn">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["pages/admin/common/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">\r\n    <div class="container-fluid">\r\n        <div class="navbar-header">\r\n            <a class="navbar-brand" href="#admin">' +
((__t = ($.i18n.t("admin.header.panel-name"))) == null ? '' : __t) +
'</a>\r\n        </div>\r\n        <div class="navbar-collapse collapse">\r\n            <ul class="nav navbar-nav navbar-right">\r\n                <li><a id="log-out">Log out</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["pages/admin/common/main_container.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<link rel="stylesheet" href="css/bootstrap.min.css"/>\r\n<link rel="stylesheet" href="css/dashboard.css"/>\r\n\r\n<div class="container-fluid">\r\n    <div class="row">\r\n        <div class="col-sm-3 col-md-2 sidebar">\r\n            <ul class="nav nav-sidebar">\r\n                <li ';
 if(selected_page && all_pages.about === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#admin">' +
((__t = ($.i18n.t("admin.left-panel.about"))) == null ? '' : __t) +
'</a></li>\r\n            </ul>\r\n            <ul class="nav nav-sidebar">\r\n                <li ';
 if(selected_page && all_pages.bouquets === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#admin/albums/' +
((__t = (album_types.bouquets)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.bouquets"))) == null ? '' : __t) +
'</a></li>\r\n                <li ';
 if(selected_page && all_pages.decorations === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#admin/albums/' +
((__t = (album_types.decorations)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.decorations"))) == null ? '' : __t) +
'</a></li>\r\n                <li ';
 if(selected_page && all_pages.invitations === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#admin/albums/' +
((__t = (album_types.invitations)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.invitations"))) == null ? '' : __t) +
'</a></li>\r\n                <li ';
 if(selected_page && all_pages.graphic === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#admin/albums/' +
((__t = (album_types.graphic)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.graphic"))) == null ? '' : __t) +
'</a></li>\r\n            </ul>\r\n            <ul class="nav nav-sidebar">\r\n                <li ';
 if(selected_page && all_pages.contacts === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#admin/contacts">' +
((__t = ($.i18n.t("admin.left-panel.contacts"))) == null ? '' : __t) +
'</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["pages/admin/contacts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin.contacts-page.page-header"))) == null ? '' : __t) +
'</h3>\r\n<div class="breadcrumb">\r\n    <div class="form-group">\r\n        <label for="description">' +
((__t = ($.i18n.t("admin.contacts-page.text-title"))) == null ? '' : __t) +
'</label>\r\n        <textarea cols="80" id="description" rows="8">';
 if(data && data.description) { ;
__p += ' ' +
((__t = (data.description)) == null ? '' : __t) +
' ';
 } ;
__p += '</textarea>\r\n    </div>\r\n    \r\n    <button id="update-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.contacts-page.save-btn"))) == null ? '' : __t) +
'</button>\r\n</div>';

}
return __p
};

this["JST"]["pages/admin/sign_in.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<link rel="stylesheet" href="css/bootstrap.min.css"/>\r\n\r\n<div class="container">\r\n    <form class="form-signin" id="admin-sign-in-form">\r\n        <h2 class="form-signin-heading">' +
((__t = ($.i18n.t("admin.sign-in-page.form-header"))) == null ? '' : __t) +
'</h2>\r\n        <label for="input-email" class="sr-only">' +
((__t = ($.i18n.t("admin.sign-in-page.email"))) == null ? '' : __t) +
'</label>\r\n        <input type="email" id="input-email" class="form-control" placeholder="' +
((__t = ($.i18n.t("admin.sign-in-page.email"))) == null ? '' : __t) +
'" required autofocus>\r\n        <label for="input-password" class="sr-only">' +
((__t = ($.i18n.t("admin.sign-in-page.password"))) == null ? '' : __t) +
'</label>\r\n        <input type="password" id="input-password" class="form-control" placeholder="' +
((__t = ($.i18n.t("admin.sign-in-page.password"))) == null ? '' : __t) +
'" required>\r\n        <button class="btn btn-lg btn-primary btn-block" type="submit">' +
((__t = ($.i18n.t("admin.sign-in-page.sign-in-btn"))) == null ? '' : __t) +
'</button>\r\n    </form>\r\n</div>';

}
return __p
};

this["JST"]["pages/not_found.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<style type="text/css">\r\n    .wrap {\r\n        display: table;\r\n        height: 100%;\r\n        width: 100%;\r\n        position: absolute;\r\n    }\r\n        .wrap > .logo {\r\n            height: 100%;\r\n            display: table-cell;\r\n            vertical-align: middle;\r\n            text-align: center;\r\n            padding-left: 10%;\r\n            padding-right: 10%;\r\n        }\r\n        .wrap p {\r\n            font-family: Arial, Helvetica, sans-serif;\r\n        }\r\n            .wrap > .logo > img {\r\n                max-width: 100%;\r\n            }\r\n            .wrap p a {\r\n                color: #eee;\r\n                font-size: 13px;\r\n                margin-left: 30px;\r\n                padding: 5px;\r\n                background: #FF3366;\r\n                text-decoration: none;\r\n                -webkit-border-radius: .3em;\r\n                -moz-border-radius: .3em;\r\n                border-radius: .3em;\r\n            }\r\n                .wrap p a:hover {\r\n                    color: #fff;\r\n                }\r\n</style>\r\n<div class="wrap">\r\n    <div class="logo">\r\n        <img src="./img/404.png" alt=""  />\r\n        <p><a href="#">Go back to Home</a></p>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["pages/server_error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<style type="text/css">\r\n    .wrap {\r\n        display: table;\r\n        height: 100%;\r\n        width: 100%;\r\n        position: absolute;\r\n    }\r\n        .wrap > .logo {\r\n            height: 100%;\r\n            display: table-cell;\r\n            vertical-align: middle;\r\n            text-align: center;\r\n            padding-left: 10%;\r\n            padding-right: 10%;\r\n        }\r\n        .wrap p {\r\n            font-family: Arial, Helvetica, sans-serif;\r\n        }\r\n            .wrap > .logo > img {\r\n                max-width: 100%;\r\n            }\r\n            .wrap p a {\r\n                color: #eee;\r\n                font-size: 13px;\r\n                margin-left: 30px;\r\n                padding: 5px;\r\n                background: #FF3366;\r\n                text-decoration: none;\r\n                -webkit-border-radius: .3em;\r\n                -moz-border-radius: .3em;\r\n                border-radius: .3em;\r\n            }\r\n                .wrap p a:hover {\r\n                    color: #fff;\r\n                }\r\n</style>\r\n<div class="wrap">\r\n    <div class="logo">\r\n        <img src="./img/503.png" alt=""  />\r\n        <p><a href="#">Go back to Home</a></p>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["pages/user_part/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(data) { ;
__p += '\r\n    <table class="about-text-template">\r\n        <tbody>\r\n            <tr>\r\n                <td class="image">\r\n                    ';
 if(data.image_url) { ;
__p += '\r\n                        <img src="' +
((__t = (data.image_url)) == null ? '' : __t) +
'" />\r\n                    ';
 } ;
__p += '\r\n                    ';
 if(data.description) { ;
__p += '\r\n                        <div>\r\n                            ' +
((__t = (data.description)) == null ? '' : __t) +
'\r\n                        </div>\r\n                    ';
 } ;
__p += '\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n';
 } ;


}
return __p
};

this["JST"]["pages/user_part/album_images.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n';
 if(description) { ;
__p += '\r\n    <div class="description">\r\n        ' +
((__t = ( description )) == null ? '' : __t) +
'\r\n    </div>\r\n';
 } ;
__p += '\r\n\r\n<div class="images-grid" style="height: ' +
((__t = ( data.totalHeight )) == null ? '' : __t) +
'px;">\r\n    ';
 if(data && data.images && data.images.length > 0) { ;
__p += '\r\n        ';
 _.each(data.images, function(image) { ;
__p += '    \r\n            <div style="width: ' +
((__t = (image.styles.width)) == null ? '' : __t) +
'px;\r\n                        height: ' +
((__t = (image.styles.height)) == null ? '' : __t) +
'px;\r\n                        left: ' +
((__t = (image.styles.left)) == null ? '' : __t) +
'px;\r\n                        top: ' +
((__t = (image.styles.top)) == null ? '' : __t) +
'px;">\r\n                <img class="lazy" data-original="' +
((__t = (image.url)) == null ? '' : __t) +
'" data-id="' +
((__t = (image.id)) == null ? '' : __t) +
'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"\r\n                         ';
 if(image.description){ ;
__p += 'alt="' +
((__t = (image.description)) == null ? '' : __t) +
'" ';
 } ;
__p += '/>\r\n                ';
 if(image.description){ ;
__p += '<div class="description">' +
((__t = (image.description)) == null ? '' : __t) +
'</div>';
 } ;
__p += '\r\n            </div>\r\n        ';
 }); ;
__p += '\r\n    ';
 } ;
__p += '\r\n</div>';

}
return __p
};

this["JST"]["pages/user_part/albums_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="albums-list">\r\n    ';
 _.each(albums, function(album) { ;
__p += '\r\n\t    <li>\r\n\t        <a href="#album/' +
((__t = (album.id)) == null ? '' : __t) +
'">\r\n\t            <img class="lazy" data-original="' +
((__t = (album.album_main_image)) == null ? '' : __t) +
'" data-id="' +
((__t = (album.id)) == null ? '' : __t) +
'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ';
 if(album.album_description){ ;
__p += 'alt="' +
((__t = (album.album_description)) == null ? '' : __t) +
'" ';
 } ;
__p += '/>\r\n\t            <div>' +
((__t = (album.album_name)) == null ? '' : __t) +
'</div>\r\n\t        </a>\r\n\t    </li>\r\n    ';
 }); ;
__p += '\r\n</ul>';

}
return __p
};

this["JST"]["pages/user_part/common/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<link rel="stylesheet" href="css/theme_styles.css"/>\r\n\r\n<header class="layout-logo-center">\r\n    <div class="container">\r\n        <div class="inner">\r\n            <div class="logo logo-text">\r\n                <!--<a href="#home">\r\n                        ' +
((__t = ($.i18n.t("user.header.title"))) == null ? '' : __t) +
'\r\n                    </a>-->\r\n                <img src="./img/app_logo.png"/>\r\n            </div>\r\n            <nav class="menu">\r\n                <!-- Dynamic content -->\r\n            </nav>\t\r\n        </div>\r\n    </div>\r\n</header>\r\n<div class="parallax-banner loading" \r\n\tstyle="background-image: url(';
 if(title_img_url) { ;
__p +=
((__t = (title_img_url)) == null ? '' : __t);
 } ;
__p += '); ';
 if(!title_img_url) { ;
__p += ' display: none;';
 } ;
__p += '">\r\n</div>\r\n<section class="page" data-hash="faq" data-structure="page">\r\n    <h1 class="title">\r\n        <hr class="left-hr"/><span>' +
((__t = (page_name)) == null ? '' : __t) +
'</span>\r\n    </h1>\r\n    <div id="content" class="container">\r\n    </div>\r\n    \r\n    <div class="fsbox disabled-selection">\r\n        <div class="control close"><a class="fsbox-close"></a></div>\r\n        <div class="slides-container">\r\n            <a class="fsbox-prev"><i></i></a>\r\n            <a class="fsbox-next"><i></i></a>\r\n            <div class="spinner"><!--  --></div>\r\n            <div class="slides">\r\n                <img/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<footer>\r\n    <div class="container">\r\n        <div class="share-box">\r\n        </div>\r\n        <div class="social-icons">\r\n            <style>\r\n\r\n            </style>\r\n            <div class="social-icons-wrapper">\r\n                <div class="social-icon-box">\r\n                    <a href="https://www.facebook.com/designforlifeMG" target="_blank"><i class="icon-facebook"></i></a>\r\n                </div>\t\t\t\t\r\n\t\t\t\t<div class="social-icon-box">\r\n\t\t\t\t\t<a href="https://instagram.com/designforlife.pl/" target="_blank"><i class="icon-instagram"></i></a>\r\n\t\t\t\t</div>\r\n            </div>\t\t\r\n\t\t</div>\r\n        <div class="copyright">\r\n            <span>Copyright 2015 &copy; All rights reserved</span> <br> <a href="mailto:vik-buchinski@ya.ru" target="_blank">site by Victor Buchinskiy</a>\r\n        </div>\r\n    </div>\r\n</footer>';

}
return __p
};

this["JST"]["pages/user_part/common/header_menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul>\r\n    <li class="menu-item ';
 if(tab_name == all_tabs.about) { ;
__p += 'active';
 } ;
__p += '"><a href="#home">' +
((__t = ($.i18n.t("user.header.about"))) == null ? '' : __t) +
'</a></li>\r\n    <li class="menu-item separator">|</li>\r\n    <li class="menu-item ';
 if(tab_name == all_tabs.bouquets) { ;
__p += 'active';
 } ;
__p += '"><a href="#albums/' +
((__t = (all_tabs.bouquets)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("user.header.bukiety"))) == null ? '' : __t) +
'</a></li>\r\n    <li class="menu-item separator">|</li>\r\n    <li class="menu-item ';
 if(tab_name == all_tabs.decorations) { ;
__p += 'active';
 } ;
__p += '"><a href="#albums/' +
((__t = (all_tabs.decorations)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("user.header.decorations"))) == null ? '' : __t) +
'</a></li>\r\n    <li class="menu-item separator">|</li>\r\n    <li class="menu-item ';
 if(tab_name == all_tabs.invitations) { ;
__p += 'active';
 } ;
__p += '"><a href="#albums/' +
((__t = (all_tabs.invitations)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("user.header.invitations"))) == null ? '' : __t) +
'</a></li>\r\n    <li class="menu-item separator">|</li>\r\n    <li class="menu-item ';
 if(tab_name == all_tabs.graphic) { ;
__p += 'active';
 } ;
__p += '"><a href="#albums/' +
((__t = (all_tabs.graphic)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("user.header.graphics"))) == null ? '' : __t) +
'</a></li>\r\n    <!--<li class="menu-item separator">|</li>\r\n    <li class="menu-item"><a href="#home">' +
((__t = ($.i18n.t("user.header.blog"))) == null ? '' : __t) +
'</a></li>-->\r\n    <li class="menu-item separator">|</li>\r\n    <li class="menu-item ';
 if(tab_name == all_tabs.contacts) { ;
__p += 'active';
 } ;
__p += '"><a href="#contacts">' +
((__t = ($.i18n.t("user.header.contacts"))) == null ? '' : __t) +
'</a></li>\r\n    <!--<li class="menu-item active">\r\n            <a href=""  >ANASTASIA VOLKOVA</a>\r\n            <ul class="sub-menu">\r\n                <li class="menu-item"><a href="http://anastasiavolkova.com/faq"  >F.A.Q.</a></li>\r\n                <li class="menu-item active"><a href="http://anastasiavolkova.com/photoshoots"  >PHOTOSHOOTS</a></li>\r\n                <li class="menu-item"><a href="http://anastasiavolkova.com/self-portraits"  >SELF PORTRAITS</a></li>\r\n                <li class="menu-item"><a href="http://anastasiavolkova.com/video"  >VIDEO</a></li>\r\n                <li class="menu-item"><a href="http://anastasiavolkova.com/film"  >FILM</a></li>\r\n            </ul>\r\n        </li>\r\n        <li class="menu-item separator">|</li>-->\r\n</ul>';

}
return __p
};

this["JST"]["pages/user_part/contacts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\r\n    <br />\r\n    &nbsp;\r\n</div>\r\n\r\n';
 if(data && data.description) { ;
__p += '\r\n    <div class="description">\r\n        ' +
((__t = (data.description)) == null ? '' : __t) +
'\r\n    </div>\r\n';
 } ;
__p += '\r\n<br />\r\n\r\n<form method="post" class="form layout-without-calendar contact">\r\n    <div class="message"></div>\r\n    <div class="error"></div>\r\n\t\t\r\n    <div class="columns">\r\n        <div class="first-column">\r\n            <input id="input-name" type="text" placeholder="' +
((__t = ($.i18n.t('user.contacts.name'))) == null ? '' : __t) +
'" value="" class="f-text" />\r\n            <input id="input-phone" type="text" placeholder="' +
((__t = ($.i18n.t('user.contacts.phone'))) == null ? '' : __t) +
'" value="" class="f-text" />\t\t\t\t\r\n            <input id="input-email" type="text" placeholder="' +
((__t = ($.i18n.t('user.contacts.email'))) == null ? '' : __t) +
'" value="" class="f-text" />\r\n        </div>                              \r\n\t\t\t\r\n        <div class="second-column">\r\n            <textarea id="input-message" placeholder="' +
((__t = ($.i18n.t('user.contacts.message'))) == null ? '' : __t) +
'" class="f-textarea"></textarea>\r\n        </div>\r\n    </div>\r\n\t\t\r\n    <div class="buttons">\r\n        <input id="send-message" type="button" name="submit" class="button large" value="' +
((__t = ($.i18n.t('user.contacts.send_btn'))) == null ? '' : __t) +
'" />\r\n    </div>\r\n\t\r\n</form>';

}
return __p
};