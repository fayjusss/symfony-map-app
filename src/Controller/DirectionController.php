<?php

namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class DirectionController
{
    /**
     * @Route("/direction")
     */
    public function directionpage()
    {
        return new Response('OMG! direction page already! WOOO!');
    }
}