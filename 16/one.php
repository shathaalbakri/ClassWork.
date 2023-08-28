<?php
    class Student
    {
        //atrributed
        public $name ='Shatha';
        public $age =22;

        //methode
        public function saywelcome(){
            // each("Welcome");
            return"Welcome";
        }
    }

    $student1 = new Student();
    echo($student1->saywelcome());
    // $student1->saywelcome();
    // print_r($student1->name);
    // print_r($student1->age);
    // print_r($student1->age=23);
?>
