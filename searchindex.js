Search.setIndex({"docnames": ["chapters/event_loop/intro", "chapters/event_loop/producer_consumer", "chapters/event_loop/simple_scheduler", "chapters/event_loop/threading", "chapters/intro"], "filenames": ["chapters/event_loop/intro.md", "chapters/event_loop/producer_consumer.ipynb", "chapters/event_loop/simple_scheduler.ipynb", "chapters/event_loop/threading.ipynb", "chapters/intro.md"], "titles": ["Event loop", "Producer consumer problem", "A simple scheduler", "Running in parallel", "From scratch"], "terms": {"If": [0, 1, 2, 3], "you": [0, 1, 2, 3, 4], "have": [0, 1, 2, 3, 4], "ever": 0, "us": [0, 1, 2, 3], "someth": [0, 1, 2, 3], "along": 0, "line": 0, "async": [0, 1], "await": 0, "futur": 0, "promis": 0, "fundament": [0, 4], "idea": [0, 4], "concurr": [0, 1, 2], "It": [0, 1, 2], "how": [0, 1, 2], "we": [0, 1, 2, 3, 4], "get": [0, 1], "co": [0, 3], "oper": 0, "thi": [0, 1, 2, 3, 4], "adventur": 0, "write": [0, 3, 4], "our": 0, "own": 0, "from": [0, 1, 2], "scratch": 0, "understand": [0, 4], "realli": [0, 2], "work": [0, 1, 2, 3], "underneath": 0, "The": [0, 1], "chapter": [0, 1, 4], "assum": [0, 1], "late": 0, "beginn": 0, "intermedi": 0, "profici": 0, "python": [0, 1, 2, 4], "As": 1, "state": [1, 2], "last": 1, "who": 1, "an": [1, 2, 3], "event": [1, 2, 4], "ani": [1, 2], "arbitrari": [1, 2], "time": [1, 3], "And": [1, 2, 3], "wait": [1, 2, 3], "listen": [1, 2], "On": 1, "receiv": 1, "act": 1, "let": [1, 2, 3], "s": [1, 2, 3, 4], "start": [1, 2, 3, 4], "implement": [1, 2, 4], "thread": [1, 2, 3], "like": 1, "befor": 1, "import": [1, 2, 3], "queue": [1, 2], "def": [1, 2, 3], "q": 1, "count": [1, 2, 3], "n": [1, 2, 3], "rang": 1, "print": [1, 2, 3], "put": 1, "sleep": [1, 2, 3], "1": [1, 2, 3], "done": 1, "none": 1, "while": [1, 2, 3], "true": [1, 2], "item": [1, 2], "break": [1, 2], "ad": 1, "pictur": 1, "add": [1, 2], "everi": [1, 2, 4], "second": [1, 3], "keep": [1, 2], "loop": [1, 2, 4], "all": [1, 2, 3, 4], "whenev": 1, "see": [1, 2], "out": [1, 4], "ll": [1, 2, 3, 4], "announc": 1, "its": [1, 2], "final": [1, 2], "kick": [1, 2], "off": [1, 2, 3, 4], "two": [1, 2, 3], "them": [1, 2, 3], "both": [1, 2], "target": [1, 3], "arg": [1, 3], "10": 1, "0": [1, 2, 3], "plan": 1, "now": [1, 2, 3], "challeng": 1, "run": [1, 2], "instead": [1, 2], "parallel": 1, "cannot": 1, "exist": 1, "setup": [1, 2, 3], "sinc": 1, "default": 1, "doe": 1, "commun": 1, "wai": [1, 2, 3], "schedul": 1, "need": [1, 2], "custom": 1, "reimport": 1, "old": 1, "had": 1, "previou": 1, "think": [1, 2], "about": [1, 2], "asyncqueu": 1, "heapq": [1, 2], "collect": [1, 2], "dequ": [1, 2], "class": [1, 2], "__init__": [1, 2], "self": [1, 2], "readi": [1, 2], "prioriti": 1, "sequenc": 1, "call_soon": [1, 2], "func": [1, 2], "append": [1, 2], "call_lat": [1, 2], "delai": [1, 2], "deadlin": [1, 2], "heappush": [1, 2], "run_count": 1, "_": [1, 2], "heappop": [1, 2], "delta": [1, 2], "question": [1, 2], "block": [1, 2], "f": 1, "popleft": [1, 2], "wil": 1, "still": [1, 2], "pretti": [1, 4], "much": 1, "same": [1, 2], "exampl": 1, "simpl": [1, 3, 4], "could": 1, "normal": 1, "tricki": 1, "part": 1, "function": [1, 2, 3, 4], "trigger": 1, "constantli": 1, "mock": 1, "return": 1, "becaus": 1, "someon": 1, "call": [1, 2, 3], "continu": 1, "somehow": 1, "signal": 1, "why": [1, 2, 3], "callback": 1, "can": [1, 2, 3, 4], "pass": 1, "when": 1, "ar": [1, 2, 3], "nope": 1, "even": [1, 3], "some": [1, 2], "other": [1, 2, 3], "orchestr": [1, 2], "should": 1, "so": [1, 2, 3], "would": 1, "solv": [1, 2, 3], "minut": 1, "pai": 1, "close": 1, "attent": 1, "what": [1, 3, 4], "anoth": [1, 2], "each": [1, 3], "check": [1, 2], "element": 1, "reason": 1, "here": [1, 2, 4], "getter": 1, "later": 1, "els": 1, "lambda": [1, 2], "observ": [1, 2], "carefulli": 1, "happen": [1, 3], "thei": [1, 3], "come": [1, 2], "back": 1, "queu": [1, 2], "neat": 1, "trick": 1, "also": [1, 2, 3], "bad": 1, "actual": 1, "detail": [1, 4], "might": 1, "more": [1, 2], "clear": 1, "For": 1, "maintain": [1, 2], "counter": [1, 2, 3], "current": 1, "which": [1, 2, 3], "mean": 1, "closur": [1, 2], "again": [1, 2, 3], "rule": 1, "sai": 1, "emit": 1, "complet": 1, "_run": [1, 2], "found": 1, "move": 1, "_consum": 1, "async_queu": 1, "3": [1, 2, 3], "2": [1, 2, 3], "4": [1, 2, 3], "slightli": 1, "mind": 1, "bend": 1, "recap": 1, "exactli": 1, "i": [1, 2, 4], "carri": 1, "forward": [1, 2], "At": [1, 3], "point": 1, "execut": [1, 2, 3], "one": [1, 2, 3, 4], "empti": 1, "noth": [1, 2], "do": [1, 2, 3, 4], "next": [1, 2], "fn": [1, 2, 3], "In": [1, 2, 3], "earlier": 1, "goe": 1, "look": [1, 2], "nice": 1, "flip": 1, "first": [1, 2], "paus": 1, "hairi": 1, "pars": 1, "code": 1, "becom": 1, "nightmar": 1, "construct": [1, 2], "provid": 1, "box": [1, 2], "clean": 1, "up": [1, 2, 3], "bit": 1, "yield": 1, "until": 1, "familiar": 1, "pleas": 1, "read": 1, "jump": 1, "just": [2, 3], "anyth": 2, "cpu": [2, 3], "idl": [2, 3], "spin": [2, 3], "know": 2, "ye": 2, "But": [2, 3], "take": 2, "around": 2, "interleav": 2, "request": 2, "fix": 2, "word": [2, 3], "essenti": 2, "list": 2, "nativ": 2, "ha": [2, 3], "build": [2, 4], "place": 2, "swap": 2, "countdown": [2, 3], "countup": [2, 3], "down": [2, 3], "straight": 2, "after": 2, "ask": 2, "interest": 2, "number": 2, "itself": 2, "variabl": 2, "where": 2, "stop": [2, 3], "argument": 2, "till": 2, "far": 2, "One": [2, 3], "inner": 2, "var": 2, "zero": 2, "int": 2, "piec": 2, "togeth": 2, "5": [2, 3], "awesom": [2, 3], "expect": [2, 3], "dure": 2, "That": 2, "accept": 2, "chang": 2, "new": 2, "Not": 2, "free": 2, "pull": 2, "creat": 2, "hold": 2, "asleep": 2, "sort": 2, "alwai": 2, "make": [2, 4], "sure": 2, "don": 2, "t": [2, 4], "insert": 2, "There": [2, 3], "veri": 2, "small": 2, "edg": 2, "case": 2, "tie": 2, "breaker": 2, "seq": 2, "go": [2, 4], "well": 2, "ve": 2, "differ": [2, 3], "rate": 2, "classic": 2, "problem": [2, 4], "visit": 2, "pick": 2, "produc": 2, "consum": 2, "deal": 2, "random": 2, "per": 2, "desir": 2, "respond": [2, 3], "Is": 2, "result": 2, "sequenti": 3, "stuff": 3, "truli": 3, "independ": 3, "load": 3, "real": 3, "hardwar": 3, "level": 3, "probabl": 3, "8": 3, "worker": 3, "These": 3, "languag": 3, "os": 3, "lot": 3, "order": 3, "hundr": 3, "core": 3, "verifi": 3, "25": 3, "tradit": 3, "ordin": 3, "between": 3, "right": 3, "server": 3, "mostli": 3, "term": 3, "input": 3, "output": 3, "mayb": 3, "api": 3, "file": 3, "content": 3, "show": 3, "etc": 3, "sit": 3, "preciou": 3, "resourc": 3, "rememb": 3, "richard": 4, "feynman": 4, "book": 4, "deep": 4, "dive": 4, "specif": 4, "topic": 4, "comput": 4, "scienc": 4, "tri": 4, "through": 4, "journei": 4, "find": 4, "behind": 4, "runnabl": 4, "notebook": 4, "end": 4, "set": 4, "ambiti": 4, "checklist": 4, "intend": 4, "progress": 4, "hash": 4, "encod": 4, "asymmetr": 4, "encrypt": 4, "dn": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"event": 0, "loop": 0, "an": 0, "introduct": 0, "produc": 1, "consum": 1, "problem": [1, 3], "A": 2, "simpl": 2, "schedul": 2, "dissect": 2, "what": 2, "time": 2, "sequenc": 2, "run": 3, "parallel": 3, "The": 3, "when": 3, "your": 3, "program": 3, "io": 3, "bound": 3, "from": 4, "scratch": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})