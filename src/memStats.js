
(function(ctx){

    
    var memStats = function(){
        
        this.has_performance    = has_performance();
        this.domElement         = build_dom(this.has_performance);
        
        // % js heap memory
        this.memTotal           = 100;
        this.memAllocated       = 0;
        this.memUsed            = 0;

        
        if(this.has_performance)  memLimit = performance.memory.jsHeapSizeLimit;
    }
    
    memStats.prototype = {
        
        update: function(){
            
            if(this.has_performance){
                
                
                this.memAllocated   = (performance.memory.totalJSHeapSize / memLimit) * 100;
                this.memAllocated   = this.memAllocated+(this.memAllocated<0?-1:0)>>0;
                
                this.memUsed        = (performance.memory.usedJSHeapSize / memLimit) * 100;
                this.memUsed        = this.memUsed+(this.memUsed<0?-1:0)>>0;
                
                console.log(this.memUsed, this.memAllocated, memLimit);
                
                domAllocate.style.width = (this.memAllocated - this.memUsed) + '%';
                domUsed.style.width     = this.memUsed + '%';
            }  
        }
    }
    
    // ----- private -----
    
    var domUsed, domAllocate, memLimit;
    
    function build_dom( perf ){
        
        // container
        
        var container = document.createElement( 'div' );
        container.id = 'memStats';
        container.style.cssText = 'width:100%;height:10px;font-size:10px;color:#fff;text-align:center;background-color:#000;cursor:pointer';
        
        if(perf == false){
            container.innerHTML = 'your browser not support performance.memory';
        }else{
            
            // used

            domUsed = document.createElement( 'div' );
            domUsed.style.cssText = 'width:0%;height:10px;background-color:#f0f;float:left';
            container.appendChild( domUsed );
            
            // allocated
        
            domAllocate = document.createElement( 'div' );
            domAllocate.style.cssText = 'width:0%;height:10px;background-color:#00f;float:left';
            container.appendChild( domAllocate );

            
        }
        
        

        return container;
    }
    
    function has_performance(){        
        return (typeof performance == 'undefined') ? false : true;
    }
    
    ctx.memStats = memStats;
    
})(window);
