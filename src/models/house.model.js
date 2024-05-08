import mongoose from 'mongoose';

const houseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    plancha: Boolean,

    lavadora: Boolean,
    habitaciones: {
      type: Number,
      required: true,
    },

    huespedes: {
      type: Number,
      required: true,
    },

    toilet: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],

    mts2: {
      type: String,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    picina: { type: Boolean, required: true },

    lavadora: { type: Boolean, required: true },
    acc: { type: Boolean, required: true },
    mascotas: { type: Boolean, required: true },
    jardin: {
      type: Boolean,
      required: true,
    },
    terraza: {
      type: Boolean,
      required: true,
    },
    wifi: {
      type: Boolean,
      required: true,
    },
    bbq: {
      type: Boolean,
      required: true,
    },

    cocina: {
      type: Boolean,
      required: true,
    },
    frigorifico: {
      type: Boolean,
      required: true,
    },
    lavavajillas: {
      type: Boolean,
      required: true,
    },
    microondas: {
      type: Boolean,
      required: true,
    },
    horno: {
      type: Boolean,
      required: true,
    },
    cafetera: {
      type: Boolean,
      required: true,
    },
    tostadora: {
      type: Boolean,
      required: true,
    },
    hervidor: {
      type: Boolean,
      required: true,
    },

    disPlaya: {
      type: String,
      required: true,
    },
    disCentro: {
      type: String,
      required: true,
    },
    disSuper: {
      type: String,
      required: true,
    },

    tvSatelite: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    busyDays: {
      type: [String],
    },
    priceHigh: {
      type: Number,
      required: true,
    },
    priceLow: {
      type: Number,
      required: true,
    },
    priceMedium: {
      type: Number,
      required: true,
    },
    reservasId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('House', houseSchema);
