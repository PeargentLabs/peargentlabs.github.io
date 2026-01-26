"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
    const [state, handleSubmit] = useForm("xdagzozb");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-24 px-12 md:px-60 w-full min-h-screen flex items-center border-white/5">
                <div className="max-w-2xl w-full">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Thank you<span className="text-peargent-green font-bold">.</span>
                    </h2>
                    <p className="text-white/70 text-lg font-light">
                        We received your message and will get back to you shortly.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 px-12 md:px-60 w-full min-h-screen flex items-center border-white/5">
            <div className="max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-white mb-8">
                    Contact Us<span className="text-peargent-green font-bold">.</span>
                </h2>
                <p className="text-white/70 mb-10 font-light">
                    Interested in collaboration or have questions about our research? Reach
                    out to us.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-white/70"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10  text-white focus:outline-none focus:border-peargent-green transition-colors"
                                placeholder="J. Oppenheimer"
                                required
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-white/70"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10  text-white focus:outline-none focus:border-peargent-green transition-colors"
                                placeholder="name@lab.com"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-white/70"
                        >
                            Reason of Contact
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10  text-white focus:outline-none focus:border-peargent-green transition-colors resize-none"
                            placeholder="Briefly describe your inquiry..."
                            required
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="px-8 py-3 bg-white text-black font-semibold border border-transparent hover:bg-black hover:text-peargent-green hover:border-peargent-green transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};
