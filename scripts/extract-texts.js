#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Text patterns to extract
const textPatterns = [
	// Button text
	/>([^<]{2,50})<\/button>/g,
	// Link text
	/>([^<]{2,100})<\/a>/g,
	// Headings
	/<h[1-6][^>]*>([^<]{2,100})<\/h[1-6]>/g,
	// Paragraphs
	/<p[^>]*>([^<]{10,200})<\/p>/g,
	// Labels
	/<label[^>]*>([^<]{2,50})<\/label>/g,
	// Placeholders
	/placeholder="([^"]{2,50})"/g,
	// Tooltips
	/title="([^"]{2,100})"/g,
	// Options
	/<option[^>]*>([^<]{2,50})<\/option>/g,
	// Spans with text content
	/<span[^>]*>([^<]{2,50})<\/span>/g,
	// Divs with text content (careful with this)
	/<div[^>]*class="[^"]*(?:label|title|text|message)[^"]*"[^>]*>([^<]{2,100})<\/div>/g
];

const excludePatterns = [
	// Exclude code blocks
	/<code[^>]*>.*?<\/code>/gs,
	// Exclude scripts
	/<script[^>]*>.*?<\/script>/gs,
	// Exclude styles
	/<style[^>]*>.*?<\/style>/gs,
	// Exclude HTML comments
	/<!--.*?-->/gs
];

const extractedTexts = new Set();

function extractFromFile(filePath) {
	const content = fs.readFileSync(filePath, 'utf-8');

	// Remove excluded patterns
	let cleanContent = content;
	for (const pattern of excludePatterns) {
		cleanContent = cleanContent.replace(pattern, '');
	}

	// Extract texts
	for (const pattern of textPatterns) {
		pattern.lastIndex = 0; // Reset regex
		let match;
		while ((match = pattern.exec(cleanContent)) !== null) {
			const text = match[1] || match[1]; // Different groups for different patterns
			if (text?.trim()) {
				const cleanText = text
					.trim()
					.replace(/&[a-zA-Z]+;/g, '') // Remove HTML entities
					.replace(/\s+/g, ' ') // Normalize whitespace
					.replace(/[{}()[\]<>]/g, '') // Remove brackets
					.trim();

				if (cleanText.length > 2 && !/^[0-9\s\-\+\.,%]+$/.test(cleanText)) {
					extractedTexts.add(cleanText);
				}
			}
		}
	}
}

function walkDirectory(dir, callback) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			// Skip node_modules, .git, etc.
			if (!['node_modules', '.git', '.svelte-kit', 'dist', 'build'].includes(file)) {
				walkDirectory(filePath, callback);
			}
		} else if (file.endsWith('.svelte') || file.endsWith('.html')) {
			callback(filePath);
		}
	}
}

// Extract from all Svelte and HTML files
walkDirectory(path.join(projectRoot, 'src'), extractFromFile);

// Create translations directory
const translationsDir = path.join(projectRoot, 'src/lib/paraglide/messages');
if (!fs.existsSync(translationsDir)) {
	fs.mkdirSync(translationsDir, { recursive: true });
}

// Generate translation files
const languages = [
	'en',
	'tr',
	'es',
	'fr',
	'de',
	'it',
	'pt',
	'ru',
	'ja',
	'ko',
	'zh',
	'ar',
	'hi',
	'bn',
	'ur'
];

for (const lang of languages) {
	const translations = {};

	// Add common translations first
	const commonTranslations = {
		Copy:
			lang === 'tr'
				? 'Kopyala'
				: lang === 'es'
					? 'Copiar'
					: lang === 'fr'
						? 'Copier'
						: lang === 'de'
							? 'Kopieren'
							: lang === 'it'
								? 'Copia'
								: lang === 'pt'
									? 'Copiar'
									: lang === 'ru'
										? 'Копировать'
										: lang === 'ja'
											? 'コピー'
											: lang === 'ko'
												? '복사'
												: lang === 'zh'
													? '复制'
													: lang === 'ar'
														? 'نسخ'
														: lang === 'hi'
															? 'कॉपी करें'
															: lang === 'bn'
																? 'কপি করুন'
																: lang === 'ur'
																	? 'کاپی کریں'
																	: 'Copy',
		Download:
			lang === 'tr'
				? 'İndir'
				: lang === 'es'
					? 'Descargar'
					: lang === 'fr'
						? 'Télécharger'
						: lang === 'de'
							? 'Herunterladen'
							: lang === 'it'
								? 'Scarica'
								: lang === 'pt'
									? 'Baixar'
									: lang === 'ru'
										? 'Скачать'
										: lang === 'ja'
											? 'ダウンロード'
											: lang === 'ko'
												? '다운로드'
												: lang === 'zh'
													? '下载'
													: lang === 'ar'
														? 'تحميل'
														: lang === 'hi'
															? 'डाउनलोड करें'
															: lang === 'bn'
																? 'ডাউনলোড করুন'
																: lang === 'ur'
																	? 'ڈاؤن لوڈ کریں'
																	: 'Download',
		Format:
			lang === 'tr'
				? 'Biçimlendir'
				: lang === 'es'
					? 'Formatear'
					: lang === 'fr'
						? 'Formater'
						: lang === 'de'
							? 'Formatieren'
							: lang === 'it'
								? 'Formatta'
								: lang === 'pt'
									? 'Formatar'
									: lang === 'ru'
										? 'Форматировать'
										: lang === 'ja'
											? 'フォーマット'
											: lang === 'ko'
												? '포맷'
												: lang === 'zh'
													? '格式化'
													: lang === 'ar'
														? 'تنسيق'
														: lang === 'hi'
															? 'फॉर्मेट करें'
															: lang === 'bn'
																? 'ফরম্যাট করুন'
																: lang === 'ur'
																	? 'فارمیٹ کریں'
																	: 'Format',
		Validate:
			lang === 'tr'
				? 'Doğrula'
				: lang === 'es'
					? 'Validar'
					: lang === 'fr'
						? 'Valider'
						: lang === 'de'
							? 'Validieren'
							: lang === 'it'
								? 'Valida'
								: lang === 'pt'
									? 'Validar'
									: lang === 'ru'
										? 'Проверить'
										: lang === 'ja'
											? '検証'
											: lang === 'ko'
												? '검증'
												: lang === 'zh'
													? '验证'
													: lang === 'ar'
														? 'تحقق'
														: lang === 'hi'
															? 'वैध करें'
															: lang === 'bn'
																? 'যাচাই করুন'
																: lang === 'ur'
																	? 'ویلیڈیٹ کریں'
																	: 'Validate',
		Convert:
			lang === 'tr'
				? 'Dönüştür'
				: lang === 'es'
					? 'Convertir'
					: lang === 'fr'
						? 'Convertir'
						: lang === 'de'
							? 'Konvertieren'
							: lang === 'it'
								? 'Converti'
								: lang === 'pt'
									? 'Converter'
									: lang === 'ru'
										? 'Конвертировать'
										: lang === 'ja'
											? '変換'
											: lang === 'ko'
												? '변환'
												: lang === 'zh'
													? '转换'
													: lang === 'ar'
														? 'تحويل'
														: lang === 'hi'
															? 'कनवर्ट करें'
															: lang === 'bn'
																? 'রূপান্তর করুন'
																: lang === 'ur'
																	? 'کنورٹ کریں'
																	: 'Convert',
		Minify:
			lang === 'tr'
				? 'Küçült'
				: lang === 'es'
					? 'Minificar'
					: lang === 'fr'
						? 'Minifier'
						: lang === 'de'
							? 'Minimieren'
							: (lang === 'it') | 'pt'
								? 'Minificar'
								: lang === 'ru'
									? 'Минифицировать'
									: lang === 'ja'
										? '最小化'
										: lang === 'ko'
											? '압축'
											: lang === 'zh'
												? '压缩'
												: lang === 'ar'
													? 'تصغير'
													: lang === 'hi'
														? 'मिनिफाई करें'
														: lang === 'bn'
															? 'মিনিফাই করুন'
															: lang === 'ur'
																? 'مینیفائی کریں'
																: 'Minify',
		Clear:
			lang === 'tr'
				? 'Temizle'
				: lang === 'es'
					? 'Limpiar'
					: lang === 'fr'
						? 'Effacer'
						: lang === 'de'
							? 'Löschen'
							: lang === 'it'
								? 'Cancella'
								: lang === 'pt'
									? 'Limpar'
									: lang === 'ru'
										? 'Очистить'
										: lang === 'ja'
											? 'クリア'
											: lang === 'ko'
												? '지우기'
												: lang === 'zh'
													? '清除'
													: lang === 'ar'
														? 'مسح'
														: lang === 'hi'
															? 'साफ़ करें'
															: lang === 'bn'
																? 'পরিষ্কার করুন'
																: lang === 'ur'
																	? 'صاف کریں'
																	: 'Clear',
		Load:
			lang === 'tr'
				? 'Yükle'
				: lang === 'es'
					? 'Cargar'
					: lang === 'fr'
						? 'Charger'
						: lang === 'de'
							? 'Laden'
							: lang === 'it'
								? 'Carica'
								: lang === 'pt'
									? 'Carregar'
									: lang === 'ru'
										? 'Загрузить'
										: lang === 'ja'
											? '読み込む'
											: lang === 'ko'
												? '로드'
												: lang === 'zh'
													? '加载'
													: lang === 'ar'
														? 'تحميل'
														: lang === 'hi'
															? 'लोड करें'
															: lang === 'bn'
																? 'লোড করুন'
																: lang === 'ur'
																	? 'لوڈ کریں'
																	: 'Load',
		Save:
			lang === 'tr'
				? 'Kaydet'
				: lang === 'es'
					? 'Guardar'
					: lang === 'fr'
						? 'Enregistrer'
						: lang === 'de'
							? 'Speichern'
							: lang === 'it'
								? 'Salva'
								: lang === 'pt'
									? 'Salvar'
									: lang === 'ru'
										? 'Сохранить'
										: lang === 'ja'
											? '保存'
											: lang === 'ko'
												? '저장'
												: lang === 'zh'
													? '保存'
													: lang === 'ar'
														? 'حفظ'
														: lang === 'hi'
															? 'सेव करें'
															: lang === 'bn'
																? 'সংরক্ষণ করুন'
																: lang === 'ur'
																	? 'محفوظ کریں'
																	: 'Save',
		Close:
			lang === 'tr'
				? 'Kapat'
				: lang === 'es'
					? 'Cerrar'
					: lang === 'fr'
						? 'Fermer'
						: lang === 'de'
							? 'Schließen'
							: lang === 'it'
								? 'Chiudi'
								: lang === 'pt'
									? 'Fechar'
									: lang === 'ru'
										? 'Закрыть'
										: lang === 'ja'
											? '閉じる'
											: lang === 'ko'
												? '닫기'
												: lang === 'zh'
													? '关闭'
													: lang === 'ar'
														? 'إغلاق'
														: lang === 'hi'
															? 'बंद करें'
															: lang === 'bn'
																? 'বন্ধ করুন'
																: lang === 'ur'
																	? 'بند کریں'
																	: 'Close',
		Cancel:
			lang === 'tr'
				? 'İptal'
				: lang === 'es'
					? 'Cancelar'
					: lang === 'fr'
						? 'Annuler'
						: lang === 'de'
							? 'Abbrechen'
							: lang === 'it'
								? 'Annulla'
								: lang === 'pt'
									? 'Cancelar'
									: lang === 'ru'
										? 'Отмена'
										: lang === 'ja'
											? 'キャンセル'
											: lang === 'ko'
												? '취소'
												: lang === 'zh'
													? '取消'
													: lang === 'ar'
														? 'إلغاء'
														: lang === 'hi'
															? 'रद्द करें'
															: lang === 'bn'
																? 'বাতিল করুন'
																: lang === 'ur'
																	? 'منسوخ کریں'
																	: 'Cancel',
		OK:
			lang === 'tr'
				? 'Tamam'
				: lang === 'es'
					? 'Aceptar'
					: lang === 'fr'
						? 'OK'
						: lang === 'de'
							? 'OK'
							: lang === 'it'
								? 'OK'
								: lang === 'pt'
									? 'OK'
									: lang === 'ru'
										? 'ОК'
										: lang === 'ja'
											? 'OK'
											: lang === 'ko'
												? '확인'
												: lang === 'zh'
													? '确定'
													: lang === 'ar'
														? 'موافق'
														: lang === 'hi'
															? 'ठीक है'
															: lang === 'bn'
																? 'ঠিক আছে'
																: lang === 'ur'
																	? 'ٹھیک ہے'
																	: 'OK',
		Error:
			lang === 'tr'
				? 'Hata'
				: lang === 'es'
					? 'Error'
					: lang === 'fr'
						? 'Erreur'
						: lang === 'de'
							? 'Fehler'
							: lang === 'it'
								? 'Errore'
								: lang === 'pt'
									? 'Erro'
									: lang === 'ru'
										? 'Ошибка'
										: lang === 'ja'
											? 'エラー'
											: lang === 'ko'
												? '오류'
												: lang === 'zh'
													? '错误'
													: lang === 'ar'
														? 'خطأ'
														: lang === 'hi'
															? 'गलती'
															: lang === 'bn'
																? 'ত্রুটি'
																: lang === 'ur'
																	? 'خرابی'
																	: 'Error',
		Success:
			lang === 'tr'
				? 'Başarılı'
				: lang === 'es'
					? 'Éxito'
					: lang === 'fr'
						? 'Succès'
						: lang === 'de'
							? 'Erfolg'
							: lang === 'it'
								? 'Successo'
								: lang === 'pt'
									? 'Sucesso'
									: lang === 'ru'
										? 'Успешно'
										: lang === 'ja'
											? '成功'
											: lang === 'ko'
												? '성공'
												: lang === 'zh'
													? '成功'
													: lang === 'ar'
														? 'نجاح'
														: lang === 'hi'
															? 'सफलता'
															: lang === 'bn'
																? 'সফলতা'
																: lang === 'ur'
																	? 'کامیابی'
																	: 'Success',
		Loading:
			lang === 'tr'
				? 'Yükleniyor'
				: lang === 'es'
					? 'Cargando'
					: lang === 'fr'
						? 'Chargement'
						: lang === 'de'
							? 'Laden'
							: lang === 'it'
								? 'Caricamento'
								: lang === 'pt'
									? 'Carregando'
									: lang === 'ru'
										? 'Загрузка'
										: lang === 'ja'
											? '読み込み中'
											: lang === 'ko'
												? '로딩 중'
												: lang === 'zh'
													? '加载中'
													: lang === 'ar'
														? 'جاري التحميل'
														: lang === 'hi'
															? 'लोड हो रहा है'
															: lang === 'bn'
																? 'লোড হচ্ছে'
																: lang === 'ur'
																	? 'لوڈ ہو رہا ہے'
																	: 'Loading',
		Search:
			lang === 'tr'
				? 'Ara'
				: lang === 'es'
					? 'Buscar'
					: lang === 'fr'
						? 'Rechercher'
						: lang === 'de'
							? 'Suchen'
							: lang === 'it'
								? 'Cerca'
								: lang === 'pt'
									? 'Pesquisar'
									: lang === 'ru'
										? 'Поиск'
										: lang === 'ja'
											? '検索'
											: lang === 'ko'
												? '검색'
												: lang === 'zh'
													? '搜索'
													: lang === 'ar'
														? 'بحث'
														: lang === 'hi'
															? 'खोजें'
															: lang === 'bn'
																? 'অনুসন্ধান করুন'
																: lang === 'ur'
																	? 'تلاش کریں'
																	: 'Search'
	};

	// Add common translations
	Object.assign(translations, commonTranslations);

	// Add extracted texts (only English for now, others will need manual translation)
	if (lang === 'en') {
		for (const text of extractedTexts) {
			if (!translations[text]) {
				// Create a key from the text
				const key = text
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '_')
					.replace(/^_+|_+$/g, '')
					.substring(0, 50);

				translations[key] = text;
			}
		}
	} else {
		// For other languages, add empty translations that need to be filled
		for (const key of Object.keys(commonTranslations)) {
			if (!translations[key]) {
				translations[key] = ''; // Empty for manual translation
			}
		}
	}

	// Write translation file
	const content = `export default ${JSON.stringify(translations, null, 2)};`;
	fs.writeFileSync(path.join(translationsDir, `${lang}.js`), content);
}

console.log(`Extracted ${extractedTexts.size} unique texts`);
console.log('Generated translation files for:', languages.join(', '));
