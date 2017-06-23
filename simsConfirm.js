/*!
 * SmartClass Confirm plugin
 * ===================================
 *
 * developed by Mert Simsek (simsek97@gmail.com)
 * for SmartClass Project [www.smartclass.us]
 * -------------------------
 * @usage $("#element").simsConfirm();
 */
 
(function($) {

    //vars
    //var _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

    //plugin init
    $.fn.simsConfirm = function(options) {
    
        var selectorElt = this,
            simsConfirmModal = $("#myConfirmModal");
    
        //settings
        var settings = $.extend({
    
            //modal title
            modalTitle: 'SmartClass',
            
            //icon
            icon: '<i class="fa fa-3x fa-exclamation-triangle text-orange"></i>',
            
            //text
            text: "Are you sure to delete?",
            
            //ok text
            okText: "Ok",
            
            //cancel text
            cancelText: "Cancel",
            
            //custom button
            customButton: {
                text: null,
                btnClass: "btn btn-default"
            },
            
            //callback fn okBtnClicked
            okBtnClicked: function() {},
            
            //callback fn customBtnClicked
            customBtnClicked: function() {},

        }, options);

        return selectorElt.each(function(){
      
            //get elements and handle click
            selectorElt.off('click').on('click', function (e) {
    
                e.preventDefault();

                //set modal title
        		simsConfirmModal.find(".modal-title").html(settings.modalTitle);
        		
        		//empty modal body and footer
        		simsConfirmModal.find(".modal-body").empty();
        		simsConfirmModal.find(".modal-footer").empty();
        		
        		//add class to center text for body
        		simsConfirmModal.find(".modal-body").addClass("text-center");
        		
        		//add icon to the body
        		simsConfirmModal.find(".modal-body").append( $( "<p></p>").html(settings.icon) );
                
                //add text to the body
        		simsConfirmModal.find(".modal-body").append( $("<p></p>").html(settings.text) );

                //add ok button to the footer
        		simsConfirmModal.find(".modal-footer").append( '<button type="button" class="btn btn-success sims-btn-ok"><i class="fa fa-check"></i> ' + settings.okText + '</button>' );

                //add custom button to the footer if exist
                if(settings.customButton.text != null) simsConfirmModal.find(".modal-footer").append( '<button type="button" class="' + settings.customButton.btnClass + ' sims-btn-custom">' + settings.customButton.text + '</button>' );
        		
        		//add cancel button to the footer
        		simsConfirmModal.find(".modal-footer").append( '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times"></i> ' + settings.cancelText + '</button>' );
        		
        		//show modal
        		simsConfirmModal.modal('show');

                //callback ok button click event
                okBtnClickEvent( $(this) );
                
                //callback custom button click event
                if(settings.customButton.text != null) customBtnClickEvent( $(this) );               
                    
            }); //end selectorElt each
            
            function okBtnClickEvent(item) {
                
                //initiate click event for OK button
                simsConfirmModal.find(".sims-btn-ok").off("click").on("click", function(e){
    
                    //prevent default
                    e.preventDefault();
                    
                    //hide modal
                	simsConfirmModal.modal("hide");
                
                    //call okBtnClicked function
                    settings.okBtnClicked.call(item);
                });
            }

            function customBtnClickEvent(item) {
                
                //initiate click event for OK button
                simsConfirmModal.find(".sims-btn-custom").off("click").on("click", function(e){
    
                    //prevent default
                    e.preventDefault();
                    
                    //hide modal
                	simsConfirmModal.modal("hide");
                
                    //call okBtnClicked function
                    settings.customBtnClicked.call(item);
                });
            }
            
        }); //end return
        
    } //end function
    
}(jQuery));
