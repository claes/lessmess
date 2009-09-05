// Patch to the text() function, which currently forgets to insert whitespace sometimes
jQuery.fn.textExtraWhitespace = function( text ) {
    if ( typeof text !== "object" && text !== undefined )
	return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );

    var ret = "";

    jQuery.each( text || this, function(){
	    jQuery.each( this.childNodes, function(){
		    if ( this.nodeType !== 8 ) {
			ret += this.nodeType !== 1 ?
			    this.nodeValue + " ":
			    jQuery.fn.textExtraWhitespace( [ this ] );
		    }
		});
	});

    return ret;
};

