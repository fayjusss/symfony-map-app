<?php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Response;

class MapController
{
    public function homepage()
    {
        return new Response('OMG! the map page!');
    }        
}