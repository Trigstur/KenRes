<?php 
// Trigstur (c) 2020
// Using opendata.rdw.nl

$inp = $argv[1];
error_reporting(E_ERROR | E_WARNING | E_PARSE);

function assume($brick)
{
    $brick = strtoupper($brick);  
    $brick = str_replace("-", "", $brick);
    $cluster = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for ($o = 0;$o <= 5;++$o)
    {
        if ($brick[$o] === "~") 
        {
            $n[$o] = $cluster;
        }
        else
        {
            $n[$o] = ["$brick[$o]"];
        }
    }

    print ("\n [!] => Looking up \n \n");
    $file = fopen($brick, "w") or print ("[!] => Error : cannot generate file"); 
    foreach ($n[0] as $val[0]) 
    {
        foreach ($n[1] as $val[1])
        {
            foreach ($n[2] as $val[2])
            {
                foreach ($n[3] as $val[3])
                {
                    foreach ($n[4] as $val[4])
                    {
                        foreach ($n[5] as $val[5])
                        {
                            $url = "https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" . $val[0] . $val[1] . $val[2] . $val[3] . $val[4] . $val[5];
                            $obj = json_decode(file_get_contents($url) , true);
                            if ($obj[0]['kenteken'] !== null)
                            {
                                print "[+] => " . $obj[0]['kenteken'] . " \n " . $obj[0]['merk'] . " " . $obj[0]['handelsbenaming'] . " [" . $obj[0]['eerste_kleur'] . "] \n\n";
                                fwrite($file, $obj[0]['kenteken'] . " => " . $obj[0]['merk'] . " " . $obj[0]['handelsbenaming'] . " [" . $obj[0]['eerste_kleur'] . "] \n");
                            }
                            sleep(1); // Timeout to prevent overflowing 
                        }
                    }
                }
            }
        }
    }
    fclose($file);
}

// Code Starts Here

if (strlen($inp) >= 6)
{
    assume($inp); 
}
else
{
    print ("[!] => Error : Given plate is not defined or not the required length \n");
    print (" ( Min Length = 6 \n");
    print (" ( Current Length = " . strlen($inp));
} 

?>
