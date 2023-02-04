import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";
import { db } from "../utils/db.ts";

export class Todo extends Model {
  static table = "todo";

  static timestamps = true;

  static fields = {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    status: DataTypes.STRING,
  };

  static defaults = {
    status: "pending",
  };
}

db.link([Todo]);

db.sync()
