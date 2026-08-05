"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
    const [state, handleSubmit] = useForm("xdagzozb");

    if (state.succeeded) {
        return (
            <section id="contact" className="scroll-mt-24 border-t border-line">
                <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-24">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Contact</span>
                        <div className="max-w-2xl">
                            <h2 className="mb-4 font-serif text-[28px] font-medium text-ink">
                                Thank you<span className="text-accent">.</span>
                            </h2>
                            <p className="text-[15px] text-ink-soft">
                                We received your message and will get back to you shortly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="scroll-mt-24 border-t border-line">
            <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-24">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Contact</span>
                    <div className="max-w-2xl w-full">
                        <h2 className="mb-4 font-serif text-[28px] font-medium text-ink">
                            Contact Us<span className="text-accent">.</span>
                        </h2>
                        <p className="mb-10 text-[15px] text-ink-soft">
                            Interested in collaboration or have questions about our research? Reach
                            out to us.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="font-mono text-[11px] uppercase tracking-wide text-ink-soft"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border border-line bg-paper-dim px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none"
                                        placeholder="J. Oppenheimer"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                        className="text-sm text-red-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="font-mono text-[11px] uppercase tracking-wide text-ink-soft"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full border border-line bg-paper-dim px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none"
                                        placeholder="name@lab.com"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="text-sm text-red-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="font-mono text-[11px] uppercase tracking-wide text-ink-soft"
                                >
                                    Reason of Contact
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full resize-none border border-line bg-paper-dim px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none"
                                    placeholder="Briefly describe your inquiry..."
                                    required
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-sm text-red-600"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="border border-ink px-8 py-3 font-mono text-xs tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {state.submitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
