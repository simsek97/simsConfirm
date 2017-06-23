# simsConfirm jQuery Plugin
simsConfirm jQuery Plugin is a plugin to create Bootstrap style confirm modals in order to get a confirmation from users mostly like for a delete operation.
This plugin has been developed first for SmartClass Project [www.smartclass.us]

Installation
---
After downloading the files, add like below after jQuery

```html
<!-- jQuery simsConfirm plugin -->

<script src='path/to/plugin/simsConfirm.js' type='text/javascript'></script>
```

Simple Usage
---

A simple way to create confirm modal

```js
$(document).ready(function (){
    $("selector").simsConfirm();
});
```

Example
---

Set your html elements to be styled

```html
<button class="btn btn-danger" type="button" href="index.php?op=delete&Id=1"><i class="fa fa-trash"></i> Delete</button>
```

use okBtnClicked option to initiate a delete operation via ajax

```js
$(document).ready(function (){
	$("button.btn-danger").simsConfirm({
		okBtnClicked: function(){
			$.ajax({
				type	: "POST",
				url		: $(this).attr("href"),
			})
			.done(function(data) {
			    alert("Deleted");
			});
		}
	});
});
```

![File Input Screenshot](https://www.smartclass.us/img/plugins/simsConfirm/sample-big.png)


Plugin Options
---
The plugin supports these following options

Name|Type|Default|Description|
---|---|---|---
modalTitle|string|`'SmartClass'`|sets the caption of the modal
icon|string|`'<i class="fa fa-3x fa-exclamation-triangle text-orange"></i>'`|sets the icon or image on the confirm screen
text|string|`'Are you sure to delete?'`|sets the question to get confirmed
okText|string|`'Ok'`|sets the text of the OK button which is supposed to be clicked for confirmation
cancelText|string|`'Cancel'`|sets the text of the CANCEL button which is supposed to be clicked to cancel the operation
customButton|object||sets a custom button for a third kind of action
customButton.text|string|`null`|sets the text of the custiom function
customButton.btnClass|string|`'btn btn-default'`|sets the class of the custiom function
okBtnClicked|function|`null`|function that is initiated when the OK button is clicked
customBtnClicked|function|`null`|function that is initiated when the custom button is clicked
