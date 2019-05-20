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
            $table->integer('id')->autoIncrement();
            $table->date('marcado');
            $table->string('descripcion');
            $table->string('titulo');
            $table->string('tema');
            $table->integer('marcador');
            $table->date('inicio')->nullable();
            $table->date('final')->nullable();
            $table->timestamps();
        });

        Schema::table('tareas', function($table) {
          $table->foreign('marcador')->references('id')->on('users')->onDelete('cascade');
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
