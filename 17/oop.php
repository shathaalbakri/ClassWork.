<?php
    class user
    {
        public $name;
        public $age;
        public $adress;


        public function __constrct($y,$x,$z)
        {
            $name=$y;
            $age=$x;
            $adress=$z;
            echo("Welcome".$y."Youer Age".$x."Your Adrees ".$z);
        }
    };
    $f_users = new use("Shatha",'22',"Oman");
?>