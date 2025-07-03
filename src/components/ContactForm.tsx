
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useCaptcha } from "@/hooks/useCaptcha";
import { RefreshCw } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { question, userAnswer, setUserAnswer, validateCaptcha, resetCaptcha } = useCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Datenschutz",
        description: "Bitte akzeptieren Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }

    if (!validateCaptcha()) {
      toast({
        title: "CAPTCHA-Fehler",
        description: "Bitte lösen Sie die Rechenaufgabe korrekt.",
        variant: "destructive"
      });
      resetCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in production, this would send an email to office@exis.at
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false
      });
      resetCaptcha();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt aufnehmen</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-Mail *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Betreff *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Nachricht *
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* CAPTCHA Section */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sicherheitsabfrage *
          </label>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded border font-mono text-lg">
              {question} = ?
            </div>
            <Input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Antwort"
              className="w-24"
              required
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={resetCaptcha}
              className="p-2"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Lösen Sie die Rechenaufgabe zum Schutz vor Spam
          </p>
        </div>
        
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#8B1538] border-gray-300 rounded focus:ring-[#8B1538]"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            Ich habe die{" "}
            <a href="/datenschutz" className="text-[#8B1538] hover:underline">
              Datenschutzerklärung
            </a>{" "}
            gelesen und akzeptiere die Verarbeitung meiner Daten. *
          </label>
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8B1538] hover:bg-[#8B1538]/90"
        >
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
