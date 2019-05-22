<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dessert extends Model
{
    protected $table = "desserts";

  	protected $fillable = ['name', 'calories', 'fat', 'carbs', 'protein', 'iron'];
}
