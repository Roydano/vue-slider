const app = new Vue(
    {
        el: '#app',
        data:{

            counter: 0,
            images: [
                'img/dbz.jpg',
                'img/digimon.jpg',
                'img/holly-e-benji.webp',
                'img/naruto.jpg',
                'img/one-piece.jpg',
                'img/pokemon.jpg',
                'img/saint-seiya.jpg'
            ]            
        },

        methods:{

            //*manda avanti la foto al click e comincia da capo alla fine

            nextPhoto(){
                
                //! CON TERNARIA

                // (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++;

                //? METODO CLASSICO

                if(this.counter == this.images.length - 1){
                    this.counter = 0;
                } else{
                    this.counter++;
                }
                
            },

            //*manda indietro la foto al click e comincia da capo alla fine

            backPhoto(){

                //! CON TERNARIA

                // (this.counter == 0) ? this.counter = this.images.length - 1 : this.counter--;

                //? METODO CLASSICO

                if(this.counter == 0){
                    this.counter = this.images.length - 1;
                }else{
                    this.counter--;
                }
            }

        }
    }    
);