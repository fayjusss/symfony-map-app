<?php

namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class MapController
{
    /**
     * @Route("/")
     */
    public function homepage()
    {
        return new Response('OMG! the map page!');
    }        
}