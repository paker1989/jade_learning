function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (isRuntime) {
buf.push("<div class=\"first_div\"><h3>this is for runtime test " + (jade.escape((jade_interp = isRuntime) == null ? '' : jade_interp)) + "</h3><p>this is from jade pre-compile</p></div>");}.call(this,"isRuntime" in locals_for_with?locals_for_with.isRuntime:typeof isRuntime!=="undefined"?isRuntime:undefined));;return buf.join("");
}