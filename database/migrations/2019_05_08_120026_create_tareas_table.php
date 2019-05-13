<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTareasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tareas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('marcado');
            $table->integer('marcador');
            $table->date('inicio')->nullable();
            $table->date('final')->nullable();
            $table->integer('grupo');
            $table->timestamps();
        });

        Schema::table('tareas', function($table) {
          $table->foreign('marcador')->references('id')->on('users')->onDelete('cascade');
          $table->foreign('grupo')->references('id')->on('grupos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tareas');
    }
}
