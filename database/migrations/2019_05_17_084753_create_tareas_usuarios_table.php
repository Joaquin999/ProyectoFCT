<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTareasUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tareas_usuarios', function (Blueprint $table) {
          $table->integer('usuario');
          $table->integer('tarea');
          $table->primary(['usuario','tarea']);

          $table->foreign('usuario')->references('id')->on('users')->onDelete('cascade');
          $table->foreign('tarea')->references('id')->on('tareas')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tareas_usuarios');
    }
}
