import { useState } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import schoolBuilding from '@/assets/school-building.png';

export default function Kontak() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Pesan Terkirim!",
                description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Hubungi Kami"
                    subtitle="Kami siap membantu Anda. Silakan hubungi kami melalui kontak di bawah ini."
                />

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Alamat</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Jl. Budi Utomo No. 7<br />
                                            Sawah Besar, Jakarta Pusat<br />
                                            DKI Jakarta 10710
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Telepon</h3>
                                        <p className="text-sm text-muted-foreground">
                                            (021) 3865001<br />
                                            (021) 3456789 (Fax)
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Email</h3>
                                        <p className="text-sm text-muted-foreground">
                                            info@sman1jkt.sch.id<br />
                                            admissions@sman1jkt.sch.id
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Jam Operasional</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Senin - Jumat: 07:00 - 15:00<br />
                                            Sabtu: 07:00 - 12:00
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Map */}
                        <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.712869634964!2d106.83358431476884!3d-6.169185995533599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c4b8b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sSMA%20Negeri%201%20Jakarta!5e0!3m2!1sid!2sid!4v1629789000000!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
                                    <Input id="name" placeholder="Masukkan nama Anda" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="contoh@email.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subjek</label>
                                <Input id="subject" placeholder="Judul pesan Anda" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Pesan</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tuliskan pesan Anda di sini..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Mengirim...' : (
                                    <>
                                        Kirim Pesan <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
