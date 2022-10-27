function criaCalc() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        inicia() {
            this.cliqueBtn()
            this.pressionaEnter()
        },

        clearDisplay(){
            this.display.value = '';
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        },
        pressionaEnter(){
            this.display.addEventListener('keyup',e=>{
                if(e.keyCode === 13) this.realizaConta();
            })
        },
        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta Invalida');
                }
                this.display.value = conta;
            } catch(e){
                
            }
        },
        cliqueBtn(){
            document.addEventListener('click', e=>{
             const el = e.target;
             if(el.classList.contains('btn-num'))
             {
                this.btnParaDisplay(el.innerText);
                
             }  
             if(el.classList.contains('btn-clear'))
             {
                this.clearDisplay();
             } 
             if(el.classList.contains('btn-del'))
             {
                this.deleteOne();
             } 
             el.classList.contains('btn-eq')?this.realizaConta():''
            },
            )},

        btnParaDisplay(valor){
            
            this.display.value+=valor
        }
    };
}
const calculadora = criaCalc();
calculadora.inicia();