import { z } from "zod";

export const cursoMatematicasSchema = z.object({
  id: z.number({
    error: (issue) =>
      issue.input === undefined
        ? "El ID es obligatorio"
        : "El ID debe ser un numero",
  }),
  titulo: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "El titulo es obligatorio"
          : "El titulo debe ser un texto",
    })
    .min(1, { error: "El titulo no puede esta vacio" })
    .min(5, { error: "El titulo debe de tener al menos 5 caracteres" }),
  tema: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "El ID es obligatorio"
        : "El ID debe ser un numero",
  }),
  vistas: z
    .number({
      error: (issue) =>
        issue.input === undefined
          ? "Las vistas es obligatorio"
          : "Las vistas debe ser un texto",
    })
    .int({
      error: "Las vistas tienen que ser enteros",
    })
    .nonnegative({
      error: "Las vistas no deben ser nagativos",
    }),
  nivel: z.enum(["basico", "intermedio", "avanzado"], {
    error: (issue) =>
      issue.input === undefined
        ? "El nivel es obligatorio"
        : "El nivel debe ser: básico, intermedio, avanzado",
  }),
});

export const cursoMatematicasPatchSchema = cursoMatematicasSchema.partial();

export const cursoProgramacionSchema = z.object({
  id: z.number({
    error: (issue) =>
      issue.input === undefined
        ? "El ID es obligatorio"
        : "El ID debe ser un numero",
  }),
  titulo: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "El titulo es obligatorio"
          : "El titulo debe ser un texto",
    })
    .min(1, { error: "El titulo no puede esta vacio" })
    .min(5, { error: "El titulo debe de tener al menos 5 caracteres" }),
  lenuguaje: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "El ID es obligatorio"
        : "El ID debe ser un numero",
  }),
  vistas: z
    .number({
      error: (issue) =>
        issue.input === undefined
          ? "Las vistas es obligatorio"
          : "Las vistas debe ser un texto",
    })
    .int({
      error: "Las vistas tienen que ser enteros",
    })
    .nonnegative({
      error: "Las vistas no deben ser nagativos",
    }),
  nivel: z.enum(["basico", "intermedio", "avanzado"], {
    error: (issue) =>
      issue.input === undefined
        ? "El nivel es obligatorio"
        : "El nivel debe ser: básico, intermedio, avanzado",
  }),
});

export const cursoProgramacionPatchSchema = cursoMatematicasSchema.partial();

export const cursoBDSchema = z.object({
  id: z.number({
    error: (issue) =>
      issue.input === undefined
        ? "El ID es obligatorio"
        : "El ID debe ser un numero",
  }),
  titulo: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "El titulo es obligatorio"
          : "El titulo debe ser un texto",
    })
    .min(1, { error: "El titulo no puede esta vacio" })
    .min(5, { error: "El titulo debe de tener al menos 5 caracteres" }),
  tecnologia: z.string(),
  vistas: z.number().int().nonnegative(),
  nivel: z.enum(["basico", "intermedio", "avanzado"]),
});

export const cursoBDPatchSchema = cursoBDSchema.partial();
