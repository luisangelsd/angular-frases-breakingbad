export class EntityFrase {

    quote:String ='' ;
    author: String | undefined;

    constructor(quote: String, author:String){
        this.quote=quote;
        this.author=author;
    }

}


