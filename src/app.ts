import { Form } from './form'; // CTRL + .
import { Field } from './field';

// klasa zarządzająca z wszystkimi podstawowymi funkcjami aplikacji – reagowaniem na elementy interfejsu, wyświetlaniem formularzy itd.

/* 

Efektem pracy powinna być aplikacja która pozwala wyświetlić statycznie zakodowany formularz. Powinna też umożliwić pobranie wyników ankiety (wartości formularza) i wyświetlenie ich w dowolnym miejscu ekranu (jedynie dla testu metody getValue() klasy Form). 

Przykładowy formularz do wyświetlenia: 
1.	Imię (pole tekstowe) 
2.	Nazwisko (pole tekstowe) 
3.	E-mail (pole e-mail) 
4.	Wybrany kierunek studiów (select) 
5.	Czy preferujesz e-learning (checkbox) 
6.	Uwagi (textarea) 

*/

export class App {
    activeForm: Form;

    createNewForm() {
        let form = new Form();
        console.log('createNewForm has been called!');
    }

    createNewField() {
        let field: Field;
        console.log('createNewField has been called!');
    }
}


